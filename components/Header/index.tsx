import Image from "next/image"
import Logo from '@/public/logo.png'
import Link from "next/link"
import { faUser, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
    return (
        <header className="flex flex-col items-center">
            <div className="h-[170px] flex items-center">
                <Link href="/">
                    <Image className="max-w-[110px] max-h-[130px]" src={Logo} alt="logo" />
                </Link>
            </div>
            <div className="flex items-center space-x-8">
                <nav className="flex items-center">
                    <ul className="flex items-center space-x-10">
                        <li className="h-[50px] flex items-center">
                            <Link className="text-primery-foreground" href="/">Подарункові сертифікати</Link>
                        </li>
                        <li className="h-[50px] flex items-center">
                            <Link className="text-primery-foreground" href="/">Плата і документи</Link>
                        </li>
                        <li className="h-[50px] flex items-center">
                            <Link className="text-primery-foreground" href="/">Контакти</Link>
                        </li>
                    </ul>
                </nav>
                <div className="space-x-6">
                    <Link className="h-[50px]" href="/profile">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="hover:text-green-800 text-primary-foreground"
                            width={20}
                            height={20}
                        />
                    </Link>
                    <button className="h-[50px]">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="hover:text-green-800 text-primary-foreground"
                            width={20}
                            height={20}
                        />
                    </button>
                    <button className="h-[50px]">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="hover:text-green-800 text-primary-foreground"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header