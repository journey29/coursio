import { auth } from '@/auth'
import Form from '@/components/account/LoginForm'
import Image from 'next/image'
import React from 'react'

const Account = async () => {
    const session = await auth()
    return (
        <div className='py-10'>
            <Image src={session?.user?.image ? session.user.image : ''} width={200} height={200} alt='logo' />
        </div>
    )
}

export default Account