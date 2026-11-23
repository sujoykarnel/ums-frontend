import CourseOfferingTabs from "@/components/modules/courseOffering/courseOffering-tabs";

export default function CoursePage() {
  return (
    <section className="p-5">
      <div>
        <h1 className="font-bold text-2xl">Course Offering</h1>
      </div>
      <CourseOfferingTabs />
    </section>
  );
}
