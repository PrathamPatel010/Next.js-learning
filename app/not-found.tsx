import React from 'react'
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div>
            Sorry bro!! The page you looking for is not there..
            Click below to redirect to main page.<br/>
            <Link href={'/'} className={'bg-blue-500 p-1 rounded-sm'}>
                Go to Home
            </Link>
        </div>
    )
}

export default NotFoundPage;