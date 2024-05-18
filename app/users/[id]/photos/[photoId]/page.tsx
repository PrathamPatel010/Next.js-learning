import React from 'react'

type Props = {
    params: { id: number; photoId: number }
}

const page = ({ params }: Props) => {
    return (
        <div>Image for user:{params.id} and image id: {params.photoId}</div>
    )
}

export default page;