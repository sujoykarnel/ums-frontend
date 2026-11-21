import InstructorTabs from "@/components/modules/instructor/instructor-tabs";

export default function ProgramPage() {
  return (
    <section className="p-5">
      <div>
        <h1 className="font-bold text-2xl">Instructors</h1>
      </div>
      <InstructorTabs />
    </section>
  );
}
