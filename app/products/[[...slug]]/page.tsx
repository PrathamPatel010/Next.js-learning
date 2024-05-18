import React from 'react'

type Props = {
    params: { slug: string[] },
    searchParams: { sortOrder: string }
}

const ProductPage = ({ params, searchParams }: Props) => {
    return (
        <div>
            ProductPage {params.slug} <br />
            Search Param {searchParams.sortOrder}
        </div>
    )
}

export default ProductPage;