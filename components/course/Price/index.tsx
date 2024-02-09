'use client'
import { Course } from "@prisma/client"
import { useState } from "react"

type Props = {
    course: Course | null
}

const Price = ({ course }: Props) => {
    const [active, setActive] = useState('pricing');

    return (
        <div className="flex flex-row items-center justify-between bg-gray-100 rounded-2xl px-6 py-10 mt-9 mb-24">
            <div className={`cursor-pointer transition-all py-8 px-12 rounded-xl overflow-hidden ${active === 'pricing' ? 'bg-primary text-white' : ''}`} onClick={() => setActive('pricing')}>
                <h5 className="font-medium">Pricing</h5>
                <p className="text-3xl mt-1">{course?.costType} {course?.price ? `| ${course.price}` : ''}</p>
            </div>
            <div className={`cursor-pointer transition-all rounded-xl py-8 px-12 max-w-[300px] overflow-auto ${active === 'level' ? 'bg-primary text-white' : ''}`} onClick={() => setActive('level')}>
                <h5 className="font-semibold">Level</h5>
                <p className="text-3xl mt-1">{course?.level}</p>
            </div>
            <div className={`cursor-pointer transition-all rounded-xl py-8 px-12 overflow-hidden ${active === 'type' ? 'bg-primary text-white' : ''}`} onClick={() => setActive('type')}>
                <h5 className="font-semibold">Type</h5>
                <p className="text-3xl mt-1">{course?.type}</p>
            </div>
            <div className={`cursor-pointer transition-all rounded-xl py-8 px-12 overflow-hidden ${active === 'duration' ? 'bg-primary text-white' : ''}`} onClick={() => setActive('duration')}>
                <h5 className="font-semibold">Duration</h5>
                <p className="text-3xl mt-1">{course?.duration}</p>
            </div>
        </div>
    )
}

export default Price