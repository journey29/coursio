import db from '@/lib/db'
import MainCourse from '@/components/course/Main'
import Price from '@/components/course/Price'
import GetStarted from '@/components/course/GetStarted'
import Questions from '@/components/course/Questions'

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
        <div className='my-16'>
            <MainCourse course={course} />
            <Price course={course} />
            <GetStarted />
            <Questions />
        </div>
    )
}

export default CoursePage