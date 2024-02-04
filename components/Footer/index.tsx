import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo-white.png'
import Container from '../Container'

const Footer = () => {
    return (
        <footer className='bg-[#27282a] py-[34px] px-[42px] text-[#96989A] flex flex-col items-center shrink-0'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-6'>
                        <Image src={Logo} alt='logo' width={78} height={93} />
                        <p>
                            ©
                            <Link href="/" className='hover:text-secondary transition-all mx-2 text-[17px]'>Rabbit Hall</Link>
                            <span>– erotic massage in Prague</span>
                        </p>
                    </div>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link href="" className='hover:text-secondary transition-all text-[17px]'>Подарункові сертифікати</Link>
                        </li>
                        <li>
                            <Link href="/payment-recommendation" className='hover:text-secondary transition-all text-[17px]'>Плата і документи</Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-secondary transition-all text-[17px]'>Контакти</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center justify-center gap-6'>
                    <Link href="" className='hover:text-secondary transition-all text-[13px]'>Умови та положення</Link>
                    <Link href="" className='hover:text-secondary transition-all text-[13px]'>Захист персональних даних</Link>
                </div>
            </Container>
        </footer>
    )
}

export default Footer