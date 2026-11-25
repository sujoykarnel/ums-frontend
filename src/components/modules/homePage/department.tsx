"use client";

import Link from "next/link";
import { useGetAllDepartments } from "@/hooks";

export default function DepartmentSection() {
  const { data, isPending } = useGetAllDepartments();

  const departments = data?.data;

  if (isPending) {
    return "Loading...";
  }

  return (
    <section id="departments" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            Academic Departments
          </span>

          <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
            Explore Our Departments
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Discover diverse academic departments offering quality education,
            research and professional development.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments?.map((department) => (
            <div
              key={department.code}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <h3 className="mt-2 min-h-14 text-lg font-bold text-blue-950">
                {department.name}
              </h3>

              <Link
                href={`/departments/${department.code}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3"
              >
                Explore Department
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/departments"
            className="inline-block rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            View All Departments
          </Link>
        </div>
      </div>
    </section>
  );
}
