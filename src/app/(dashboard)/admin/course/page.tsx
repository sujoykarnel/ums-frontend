import DepartmentTabs from "@/components/modules/department/department-tabs";

export default function CoursePage() {
  return (
    <section className="p-5">
      <div>
        <h1 className="font-bold text-2xl">Departments</h1>
      </div>
      <DepartmentTabs />
    </section>
  );
}
