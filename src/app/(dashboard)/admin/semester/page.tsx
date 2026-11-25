import SemesterTabs from "@/components/modules/admin/semester/semester-tabs";

export default function DepartmentPage() {
  return (
    <section className="p-5">
      <div>
        <h1 className="font-bold text-2xl">Semesters</h1>
      </div>
      <SemesterTabs />
    </section>
  );
}
