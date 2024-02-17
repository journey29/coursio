"use client";
import { Button } from "@/components/ui/button";
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
    faShoppingCart,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { removeCart, setCart } from "@/store/features/cart";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const Course = ({
    title,
    price,
    costType,
    duration,
    languages,
    level,
    type,
    id,
    index,
}: CourseType & { index: number }) => {
    const { cartItems } = useAppSelector((state) => state.cartReducer);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const onClick = () => {
        router.push(`/course/${id}`);
    };

    const addToCart = async (e: any) => {
        e.stopPropagation();

        const convertedPrice = formatPrice(price);
        dispatch(setCart({ level, title, costType, id, price: convertedPrice }));
    };

    const removeFromCart = async (e: any) => {
        e.stopPropagation();
        dispatch(removeCart({ level, title, costType, id }));
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
                    <CardTitle className="mb-10 text-[17px] truncate">{title}</CardTitle>
                    {cartItems.some((cartItem) => cartItem.id === id) ? (
                        <Button
                            className="flex max-w-12 cursor-pointer items-center justify-center 
                            rounded-xl bg-primary p-4 text-white opacity-0 shadow-md transition-all group-hover:opacity-100"
                            onClick={removeFromCart}
                        >
                            <FontAwesomeIcon icon={faCheck} width={30} height={30} />
                        </Button>
                    ) : (
                        <Button
                            className="flex max-w-12 cursor-pointer items-center justify-center 
                            rounded-xl bg-primary p-4 text-white opacity-0 shadow-md transition-all group-hover:opacity-100"
                            onClick={addToCart}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} width={30} height={30} />
                        </Button>
                    )}
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
                        <FontAwesomeIcon className="mt-1" icon={faGlobe} width={15} height={15} />
                        <div className="flex flex-row items-center gap-2 flex-wrap">
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
