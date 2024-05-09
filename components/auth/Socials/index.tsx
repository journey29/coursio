"use client"

import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"

import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

type Props = {
  disabled: boolean
}

const Socials = ({ disabled }: Props) => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <div className="flex w-full items-center space-x-4">
      <Button
        className="w-full py-6"
        size={"lg"}
        onClick={() => onClick("google")}
        disabled={disabled}
      >
        <FontAwesomeIcon
          className="h-5 w-5"
          color="white"
          icon={faGoogle}
          width={20}
          height={20}
        />
      </Button>
      <Button
        className="w-full py-6"
        size={"lg"}
        onClick={() => onClick("github")}
        disabled={disabled}
      >
        <FontAwesomeIcon
          className="h-5 w-5"
          color="white"
          icon={faGithub}
          width={20}
          height={20}
        />
      </Button>
    </div>
  )
}

export default Socials
