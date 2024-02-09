import { Button } from "@/components/ui/button"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Course } from "@prisma/client"
import Image from "next/image"

type Props = {
    course: Course | null
}

const MainCourse = ({ course }: Props) => {
    return (
        <section className='flex flex-row items-start justify-between mb-24'>
            <div className='max-w-[700px]'>
                <div className='flex flex-row items-center gap-3'>
                    <FontAwesomeIcon className='text-primary-foreground' icon={faGlobe} width={20} height={20} />
                    <div className='flex flex-row items-center gap-2'>
                        {course?.languages.map((language, index) =>
                            <p key={language} className='font-medium text-primary-foreground'>
                                {language}
                                {index < course.languages.length - 1 && ','}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <h3 className='text-[68px] font-bold mt-6 leading-tight'>{course?.title}</h3>
                    <p className='text-lg mt-8'>Striving to gain market-oriented knowledge and skills to jumpstart
                        your career in IT? Apply for this program and shape your professional path with Coursio experts.
                    </p>
                    <Button className='text-xl py-5 px-7 leading-6 border min-h-16 rounded-xl mt-5'>
                        <div className='py-4 px-3'>
                            Register
                        </div>
                    </Button>
                </div>
            </div>
            <div className='relative'>
                <Image
                    className='h-[500px] rounded-[40px] object-cover rotate-12'
                    src={course?.imageUrl ? course.imageUrl : ''}
                    alt='img'
                    width={400}
                    height={500}
                />
                <div className='bg-primary blur-lg rounded-[32px] w-[400px] h-[500px] opacity-10 absolute -top-5 -z-10'></div>
            </div>
        </section>
    )
}

export default MainCourse