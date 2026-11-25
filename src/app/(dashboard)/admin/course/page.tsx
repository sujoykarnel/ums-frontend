import CourseTabs from "@/components/modules/admin/course/course-tabs";

export default function CoursePage() {
  return (
    <section className="p-5">
      <div>
        <h1 className="font-bold text-2xl">Courses</h1>
      </div>
      <CourseTabs />
    </section>
  );
}
