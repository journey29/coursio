import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import Container from "../Container"

const Footer = () => {
  return (
    <footer className="shrink-0 bg-[#27282a] px-11 py-9 text-[#96989A]">
      <Container>
        <div className="flex flex-col items-center gap-3">
          <p>
            Made by <span className="underline">Andrii Smaluniuk</span>
          </p>
          <div className="flex items-center gap-8">
            <Link
              className="group"
              href="https://github.com/journey29"
              target="_blank"
            >
              <FontAwesomeIcon
                className="mr-2 h-5 w-5 group-hover:text-[#171515]"
                icon={faGithub}
              />
              <span className="group-hover:text-[#171515]">Github</span>
            </Link>
            <Link
              className="group"
              href="https://www.linkedin.com/in/andrii-smalyniuk-2b9b86210/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="mr-2 h-5 w-5 group-hover:text-[#0e76a8]"
                icon={faLinkedin}
              />
              <span className="group-hover:text-[#0e76a8]">Linkedin</span>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
