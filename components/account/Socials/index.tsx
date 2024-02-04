'use client'

import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

const Socials = () => {

    const onClick = (provider: 'google' | 'github') => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <div className="w-full flex items-center space-x-4 my-4">
            <Button
                className="w-full py-6"
                size={'lg'}
                onClick={() => onClick('google')}
            >
                <FontAwesomeIcon className="w-5 h-5" color="white" icon={faGoogle} width={20} height={20} />
            </Button>
            <Button
                className="w-full py-6"
                size={'lg'}
                onClick={() => onClick('github')}
            >
                <FontAwesomeIcon className="w-5 h-5" color="white" icon={faGithub} width={20} height={20} />
            </Button>
        </div>
    )
}

export default Socials