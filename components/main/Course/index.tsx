"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course as CourseType } from "@prisma/client";
import {
  faBook,
  faGlobe,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CartButton from "./CartButton";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Course = ({
  title,
  costType,
  duration,
  price,
  languages,
  level,
  type,
  id,
  index,
}: CourseType & { index: number }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/course/${id}`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeIn", duration: 0.25 * index }}
      viewport={{ amount: 0 }}
    >
      <Card
        className="group relative cursor-pointer overflow-hidden rounded-lg border p-3 shadow-md dark:border-none"
        onClick={onClick}
      >
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <p className="rounded-full bg-primary px-4 py-2 font-medium text-white">
              {costType}
            </p>
            <p className="font-medium">{duration}</p>
          </div>
        </CardHeader>
        <CardContent className="pb-20">
          <CardTitle className="mb-10 truncate text-[17px]">{title}</CardTitle>
          <CartButton
            costType={costType}
            id={id}
            price={price}
            level={level}
            title={title}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2 pb-10">
          <p className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faUniversity} width={15} height={15} />
            <span>{type}</span>
          </p>
          <p className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faBook} width={15} height={15} />
            <span>{level}</span>
          </p>
          <div className="flex flex-row items-start gap-2">
            <FontAwesomeIcon
              className="mt-1"
              icon={faGlobe}
              width={15}
              height={15}
            />
            <div className="flex flex-row flex-wrap items-center gap-2">
              {languages.map((language, index) => (
                <p className="" key={language}>
                  {language}
                  {index < languages.length - 1 && ","}
                </p>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Course;
