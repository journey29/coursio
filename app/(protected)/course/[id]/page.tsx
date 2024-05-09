import GetStarted from "@/components/course/GetStarted"
import Info from "@/components/course/Info"
import MainCourse from "@/components/course/Main"
import Questions from "@/components/course/Questions"

import db from "@/lib/db"

type Props = {
  params: {
    id: string
  }
}

const CoursePage = async ({ params: { id } }: Props) => {
  const course = await db.course.findUnique({
    where: {
      id
    }
  })

  return (
    <div className="my-10">
      <MainCourse course={course} />
      <Info course={course} />
      <GetStarted />
      <Questions />
    </div>
  )
}

export default CoursePage
