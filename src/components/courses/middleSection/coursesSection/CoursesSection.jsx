import CoursesList from "./CoursesList";
import InputSection from "./InputSection";

function CoursesSection() {
  return (
    <div className="w-full lg:w-[70%] xl:w-[75%]">
      <InputSection />
      <CoursesList />
    </div>
  );
}

export default CoursesSection;
