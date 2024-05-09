import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Contacts = () => {
  return (
    <div className="max-w-[680px]">
      <div className="flex items-center gap-5">
        <FontAwesomeIcon
          className="h-8 w-8 text-primary sm:h-[50px] sm:w-[50px]"
          icon={faTelegram}
        />
        <FontAwesomeIcon
          className="h-8 w-8 text-primary sm:h-[50px] sm:w-[50px]"
          icon={faWhatsapp}
        />
      </div>
      <div className="my-3 flex flex-col text-[20px] font-bold text-primary sm:text-[30px]">
        <Link href="mailto:shop@massagehall.cz">shop@gmail.com</Link>
        <Link href="tel:420774910918">+333 333 333 333</Link>
        <Link
          href="https://maps.app.goo.gl/XhRJBH68wnaPos4x9"
          target="_blank"
        >
          104, Korunní 810, Vinohrady,
        </Link>
        <Link
          href="https://maps.app.goo.gl/XhRJBH68wnaPos4x9"
          target="_blank"
        >
          101 00 Praha 10, Czechia
        </Link>
      </div>
    </div>
  )
}

export default Contacts
