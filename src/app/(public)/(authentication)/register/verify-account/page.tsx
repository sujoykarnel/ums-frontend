import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Logo from "@/assets/svg/Logo";
import VerifyAccountForm from "@/components/form/verify-account-form";

export default function VerifyAccountPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Logo />
          <Link href="/" className="flex items-center gap-2 font-medium">
            University Management System
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Suspense fallback={<p>Loading.....</p>}>
              <VerifyAccountForm />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/registerImage.jpg"
          alt="Register background"
          fill
          priority
          className="object-cover dark:brightness-[0.2] dark:grayscale"
          sizes="50vw"
        />
      </div>
    </div>
  );
}
