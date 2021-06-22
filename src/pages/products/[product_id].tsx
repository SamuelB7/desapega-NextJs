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

export default function Product({ product, photos }) {
    const router = useRouter()

    return (
        <div className="productDisplay">
            {/* <div>{JSON.stringify(product)}</div>
            <div>{JSON.stringify(photos)}</div> */}
            <div className="productPhoto">
                <img src={photos[0]} alt={product.name}/>
            </div>

            <div className="productInfor">
                <h3>{product.name}</h3>
                <p>Vendido por: {product.seller}</p>
                <h3>{product.price}</h3>
                <div>
                    <h4>Descrição</h4>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="otherPhotos">

            </div>
        </div>
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

    const product = data.product
    const photos = data.photos

    return {
        props: {
            product,
            photos
        }
    }
}