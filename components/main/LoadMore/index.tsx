"use client";
import { fetchCourses } from "@/actions/fetch-courses";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let page = 2;
type CourseType = JSX.Element;

const LoadMore = () => {
    const { inView, ref } = useInView();
    const [data, setData] = useState<CourseType[]>([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsError(false);

            fetchCourses(page).then((res) => {
                if (res?.length === 0 || res === null) {
                    setIsError(true);
                    return;
                }

                setData([...data, ...res]);
                page++;
            });
        }
    }, [inView, data]);

    return (
        <section>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {data}
            </div>
            {!isError && (
                <div ref={ref} className="mt-5 flex justify-center">
                    <FontAwesomeIcon
                        className="h-[40px] w-[40px] animate-spin object-contain"
                        icon={faSpinner}
                    />
                </div>
            )}
        </section>
    );
};

export default LoadMore;
