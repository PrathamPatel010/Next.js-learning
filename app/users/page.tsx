import React, { Suspense } from 'react'
import UserTable from '../components/UserTable';
import Link from 'next/link';

type Props = {
    searchParams: { sortOrder: string }
}
const page = async ({ searchParams: { sortOrder } }: Props) => {
    return (
        <>
            <Link href={"/users/new"}>
                <button className="bg-slate-200 p-5 rounded-xl">
                    New User
                </button>
            </Link>
            <Suspense fallback={<p>Loading...</p>}>
                <UserTable sortOrder={sortOrder} />
            </Suspense>
        </>
    )
}

export default page;