import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <>
            <nav>
                This is navbar
            </nav>
            {children}
        </>
    )
}

export default layout;