import React from 'react'
import UserTable from '../components/UserTable';

type Props = {
    searchParams: { sortOrder: string }
}
const page = async ({ searchParams: { sortOrder } }: Props) => {
    return (
        <>
            <UserTable sortOrder={sortOrder} />
        </>
    )
}

export default page;