"use server";
import Course from "@/components/main/Course";
import db from "@/lib/db";
import { Course as CourseType } from "@prisma/client";

export const fetchCourses = async (page: number) => {
  try {
    const courses = await db.course.findMany({
      skip: (page - 1) * 6,
      take: 6,
    });

    return courses.map((course: CourseType, index) =>
      <Course
        key={course.id}
        index={index}
        {...course}
      />
    )
  } catch {
    return null
  }
};
