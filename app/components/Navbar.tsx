import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <div className="p-4 flex bg-slate-400 gap-24">
            <Link href={"/"}>Next.js</Link>
            <Link href={"/users"}>Users</Link>
        </div>
    )
}

export default Navbar;