import { addProduct } from '@/actions/add-product'
import Course from '@/components/main/Course'
import db from '@/lib/db'

const Main = async () => {
    const courses = await db.course.findMany({});

    return (
        <section className='mb-16'>
            <h1 className="text-center text-4xl">Подарункові сертифікати</h1>
            <form action={addProduct}>
                <button type='submit'>click</button>
            </form>
            <div className='grid grid-cols-3 gap-5'>
                {courses.map(course => {
                    return <Course key={course.id}
                        id={course.id}
                        title={course.title}
                        price={course.price ? course.price : null}
                        costType={course.costType}
                        languages={course.languages}
                        type={course.type}
                        level={course.level}
                        duration={course.duration}
                    />
                })}
            </div>
        </section>
    )
}

export default Main