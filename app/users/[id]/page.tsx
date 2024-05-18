import React from 'react'

type Props = {
    params: { id: number }
}

const UserDetailsPage = ({ params: { id } }: Props) => {
    return (
        <div>UserDetailsPage {id}</div>
    )
}

export default UserDetailsPage;