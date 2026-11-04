import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
import { useGoogleOAuth } from "@/hooks";

export default function GoogleLoginComponent() {
  const router = useRouter();
  const { mutate: googleLogin } = useGoogleOAuth();

  const handleGoogleSuccess = (credentialResponse: { credential?: string }) => {
    const idToken = credentialResponse.credential;
    if (!idToken) {
      toast.add({
        title: "Google OAuth Failed",
        description: "Something went wrong. Please try again",
        type: "error",
      });
      return;
    }
    googleLogin(
      { idToken },
      {
        onSuccess: () => {
          toast.add({
            title: "Login Successful",
            description: "Welcome Back!",
            type: "success",
          });

          router.push("/");
        },
        onError: (err) => {
          toast.add({
            title: "Google OAuth Failed",
            description:
              err.message || "Something went wrong. Please try again",
            type: "error",
          });
        },
      },
    );
  };

  const handleGoogleError = () => {
    toast.add({
      title: "Google OAuth Failed",
      description: "Something went wrong. Please try again",
      type: "error",
    });
  };

  return (
    <div>
      <GoogleLogin
        theme="outline"
        shape="square"
        text="continue_with"
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
      />
    </div>
  );
}
