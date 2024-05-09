import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import LoadMore from "../LoadMore"

import { fetchCourses } from "@/actions/fetch-courses"

const Main = async () => {
  const courses = await fetchCourses(1)

  return (
    <section className="mb-16">
      <h1 className="text-center text-4xl">Courses</h1>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses || (
          <p className="col-span-3 flex items-center justify-center text-center text-2xl">
            <FontAwesomeIcon
              className="mr-5 h-10 w-10 text-primary"
              icon={faFaceSadCry}
            />
            Courses have not been added yet!
          </p>
        )}
      </div>
      <LoadMore />
    </section>
  )
}

export default Main
