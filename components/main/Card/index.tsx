import { Button } from '@/components/ui/button'
import image from '@/public/images/pussycat-1.jpg'
import Image from 'next/image'
import { useState } from 'react'
import db from "@/lib/db";

const handleClick = async (data: FormData) => {
    'use server'
    await db.product.create({
        data: {
            description:
                "Párová masáž je ideální volbou pro partnery, kteří chtějí tento silně vzrušující zážitek uskutečnit spolu. Ideální pro osvěžení vztahu s naší sexy masérkou!",
            imageUrl:
                "https://shop.massagehall.cz/wp-content/uploads/2020/12/parova-1-600x591.jpg",
            title: "Dárkový poukaz na pussycat masáž",
            price: "4 100 Kč – 7 400 Kč",
            length: ""
        },
    });
};

type Props = {
    title: string,
    price: string
}

const Card = ({ title, price }: Props) => {
    return (
        <>
            <div className='transition-all cursor-pointer'

            >
                <div className={`bg-white p-[10px] rounded-xl `}>
                    <Image
                        className='max-w-[240px] max-h-[240px] rounded-2xl'
                        src={image}
                        alt='img' />
                    <div className='mt-3'>
                        <h4 className='text-[17px] mb-2'>{title}</h4>
                        <p className='text-[17px] font-bold'>{price}</p>
                    </div>
                </div>
                <form action={handleClick}>
                    <Button
                        className={` transition-all shadow-xl`}
                        variant={'custom'}
                        size={'lg'}
                        type='submit'
                    >
                        Клацнути
                    </Button>
                </form>
            </div>
        </>
    )
}

export default Card