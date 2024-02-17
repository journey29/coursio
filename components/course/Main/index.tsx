import { Button } from "@/components/ui/button";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Course } from "@prisma/client";
import Image from "next/image";

type Props = {
    course: Course | null;
};

const MainCourse = ({ course }: Props) => {
    return (
        <section className="mb-24 flex flex-col items-center justify-center gap-10 text-center xl:text-start xl:flex-row xl:items-start">
            <div className="w-full max-w-[500px] md:max-w-[700px]">
                <div className="flex flex-row items-center justify-center xl:justify-start gap-3">
                    <FontAwesomeIcon className="h-5 w-5" icon={faGlobe} />
                    <div className="flex flex-row items-center gap-2">
                        {course?.languages.map((language, index) => (
                            <p key={language} className="font-medium">
                                {language}
                                {index < course.languages.length - 1 && ","}
                            </p>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:mt-6 md:text-[68px]">
                        {course?.title}
                    </h3>
                    <p className="mt-4 text-base md:mt-8 md:text-lg">
                        Striving to gain market-oriented knowledge and skills to jumpstart
                        your career in IT? Apply for this program and shape your
                        professional path with Coursio experts.
                    </p>
                    <Button className="mt-4 min-h-16 rounded-xl px-7 py-5 text-xl leading-6 md:mt-5">
                        Learn More
                    </Button>
                </div>
            </div>
            <div className="relative mt-6 xl:mt-0">
                <Image
                    className="h-full max-h-[500px] w-[230px] sm:w-[300px] rotate-12 rounded-[30px] object-cover"
                    src={course?.imageUrl ? course.imageUrl : ""}
                    alt="img"
                    width={400}
                    height={500}
                />
                <div className="absolute -top-5 -z-10 h-full max-h-[500px] w-[230px] sm:w-[300px] rounded-[32px] bg-primary opacity-10 blur-lg"></div>
            </div>
        </section>
    );
};

export default MainCourse;
