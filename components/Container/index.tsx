import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mx-auto max-w-[1050px] w-full'>
            {children}
        </div>
    )
}

export default Container