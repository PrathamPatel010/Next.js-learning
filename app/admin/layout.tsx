import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
};

const Admin = ({ children }: Props) => {
    return (
        <div className="flex">
            <aside className="bg-slate-200 mr-5 p-5">Admin Layout</aside>
            <div>{children}</div>
        </div>
    )
}

export default Admin;