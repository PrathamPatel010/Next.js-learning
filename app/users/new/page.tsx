"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter();

    return (
        <>
            <div>New Users Page</div>
            <button onClick={() => router.push("/users")} className="bg-slate-300 p-4">Create User</button>
        </>
    )
}

export default page;