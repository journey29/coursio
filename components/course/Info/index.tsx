"use client";
import { cn } from "@/lib/utils";
import { Course } from "@prisma/client";
import { useState } from "react";

type Info = {
    course: Course | null;
};

const Info = ({ course }: Info) => {
    const [active, setActive] = useState("pricing");

    return (
        <div className="mb-16 flex flex-col items-center rounded-2xl bg-secondary px-6 py-10 md:mb-24 lg:flex-row lg:justify-between">
            <InfoItem
                courseInfo={[course?.costType, course?.price]}
                active={active}
                setActive={setActive}
                infoContext="Pricing"
            />
            <InfoItem
                courseInfo={[course?.level]}
                active={active}
                setActive={setActive}
                infoContext="Level"
            />
            <InfoItem
                courseInfo={[course?.type]}
                active={active}
                setActive={setActive}
                infoContext="Type"
            />
            <InfoItem
                courseInfo={[course?.duration]}
                active={active}
                setActive={setActive}
                infoContext="Duration"
            />
        </div>
    );
};

export default Info;

type InfoItemProps = {
    courseInfo: (string | undefined | null)[];
    active: string;
    setActive: (active: string) => void;
    infoContext: string;
};

const InfoItem = ({
    active,
    setActive,
    courseInfo,
    infoContext,
}: InfoItemProps) => {
    return (
        <div
            className={cn(
                "w-full cursor-pointer overflow-hidden rounded-xl px-8 py-6 transition-all md:px-12 md:py-8",
                {
                    "bg-primary": active === infoContext.toLowerCase(),
                },
            )}
            onClick={() => setActive(infoContext.toLowerCase())}
        >
            <h5 className="font-semibold">{infoContext}</h5>
            <p className="mt-1 text-3xl">
                {courseInfo[0]} {courseInfo[1] ? `| ${courseInfo[1]}` : ""}
            </p>
        </div>
    );
};
