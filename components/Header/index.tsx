import Link from "next/link"
import { faUser, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Cart from "../cart/Cart"

const Header = () => {
    return (
        <header className="flex flex-col items-center py-8">
            <div className="flex items-center space-x-8">
                <nav className="flex items-center">
                    <ul className="flex items-center space-x-10">
                        <li className="h-[50px] flex items-center">
                            <Link className="text-primery-foreground" href="/">Sertificates</Link>
                        </li>
                        <li className="h-[50px] flex items-center">
                            <Link className="text-primery-foreground" href="/">Payment and documents</Link>
                        </li>
                        <li className="h-[50px] flex items-center">
                            <Link className="text-primery-foreground" href="/">Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <div className="space-x-6 flex items-center">
                    <Link className="h-[50px] flex items-center" href="/profile">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="hover:text-green-800 text-primary-foreground"
                            width={20}
                            height={20}
                        />
                    </Link>
                    <Link className="h-[50px] flex items-center" href="/">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="hover:text-green-800 text-primary-foreground"
                            width={20}
                            height={20}
                        />
                    </Link>
                    <Cart />
                </div>
            </div>
        </header>
    )
}

export default Header