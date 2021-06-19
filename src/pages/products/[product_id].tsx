import { useRouter } from 'next/router'
import { api } from '../../services/api'
import { GetServerSideProps, GetStaticPaths } from 'next'

interface Product {
    id: string
    name: string
    description: string
    price: string
    seller: string
    seller_email: string
}

interface ProductProp {
    product: Product
}

export default function Product({ data }) {
    const router = useRouter()

    return (
        <div>{JSON.stringify(data)}</div>
    )
}

// Utilizando SSR
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { product_id } = ctx.params

    const { data } = await api.get(`/products/${product_id}`)

    /* const product = {
        id: data[0].id,
        name: data[0].name,
        description: data[0].description,
        price:`R$${data[0].price}`,
        seller: data[0].user.name,
        seller_email: data[0].user.email
    } */

    return {
        props: {
            data,
        }
    }
}