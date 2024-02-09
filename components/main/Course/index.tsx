'use client'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CostType, CourseLanguages, CourseType, Level } from '@prisma/client'
import { faBook, faGlobe, faUniversity, faLightbulb, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { removeCart, setCart } from '@/store/features/cart'
import { useRouter } from 'next/navigation'
import { formatPrice } from '@/lib/utils'


type Props = {
    id: string
    title: string,
    price: string | null,
    level: Level
    type: CourseType
    costType: CostType
    languages: CourseLanguages[]
    duration: string
}

const Course = ({ title, price, costType, duration, languages, level, type, id }: Props) => {
    const { cartItems } = useAppSelector(state => state.cartReducer)
    const dispatch = useAppDispatch();
    const router = useRouter()

    const onCourseClick = () => {
        router.push(`/course/${id}`)
    }

    const addToCart = async (e: any) => {
        e.stopPropagation();

        const convertedPrice = formatPrice(price);
        dispatch(setCart({ level, title, costType, id, price: convertedPrice }))
    }

    const removeFromCart = async (e: any) => {
        e.stopPropagation();
        dispatch(removeCart({ level, title, costType, id }))
    }

    return (
        <Card className='group shadow-md border p-3 rounded-lg relative overflow-hidden cursor-pointer' onClick={onCourseClick}>
            <CardHeader>
                <div className='flex flex-row items-center justify-between'>
                    <p className='bg-red-600 py-2 px-4 rounded-full text-white font-medium'>{costType}</p>
                    <p className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faLightbulb} width={15} height={15} color={'orange'} />
                        <span className='font-medium text-md'>{duration}</span>
                    </p>
                </div>
            </CardHeader>
            <CardContent className='pb-20'>
                <CardTitle className='text-[17px] mb-2'>{title}</CardTitle>
                {cartItems.some(cartItem => cartItem.id === id)
                    ? <Button className='flex items-center justify-center shadow-md text-white 
                    bg-primary rounded-xl cursor-pointer p-4 max-w-12 opacity-0 group-hover:opacity-100 transition-all'
                        onClick={removeFromCart}
                    >
                        <FontAwesomeIcon icon={faGlobe} width={30} height={30} />
                    </Button>
                    : <Button className='flex items-center justify-center shadow-md text-white 
                        bg-primary rounded-xl cursor-pointer p-4 max-w-12 opacity-0 group-hover:opacity-100 transition-all'
                        onClick={addToCart}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} width={30} height={30} />
                    </Button>
                }
            </CardContent>
            <CardFooter className='pb-10'>
                <div>
                    <p className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faUniversity} width={15} height={15} />
                        <span>{type}</span>
                    </p>
                    <p className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faBook} width={15} height={15} />
                        <span>{level}</span>
                    </p>
                    <div className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon icon={faGlobe} width={15} height={15} />
                        <div className='flex flex-row items-center gap-2'>
                            {languages.map((language, index) =>
                                <p key={language}>
                                    {language}
                                    {index < languages.length - 1 && ','}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default Course