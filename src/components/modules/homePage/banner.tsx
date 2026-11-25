
import Image from "next/image";
import banner from "@/assets/banner/education-team.jpg";

export default function HomeBanner() {
  return (
    <section className="relative h-125 w-full overflow-hidden md:h-162.5">
      <Image
        src={banner}
        alt="University education team"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-950/60 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5">
        <div className="max-w-2xl text-white">
          <span className="rounded-full border border-white/40 px-4 py-2 text-sm">
            Welcome to Our University
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
            Education for a Better
            <span className="block text-blue-300">Tomorrow</span>
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-blue-100">
            Discover your potential, explore new opportunities and build a
            successful future with us.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#admission"
              className="rounded-lg bg-white px-7 py-4 font-bold text-blue-950 hover:bg-blue-100"
            >
              Apply Now →
            </a>

            <a
              href="#about"
              className="rounded-lg border border-white px-7 py-4 font-bold text-white hover:bg-white/10"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
