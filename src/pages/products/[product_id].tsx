import styles from './styles.module.scss'
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
        <div className={styles.productDisplay}>
            {/* <div>{JSON.stringify(product)}</div>
            <div>{JSON.stringify(photos)}</div> */}
            <div className={styles.productPhoto}>
                <img src={photos[0]} alt={product.name}/>
            </div>

            <div className={styles.productInfo}>
                <h1>{product.name}</h1>
                <p>Vendido por: {product.seller}</p>
                <h3>{product.price}</h3>
                <div>
                    <h4>Descrição</h4>
                    <p>{product.description}</p>
                </div>
            </div>

            <div className={styles.otherPhotos}>
                {photos.map((photo) => {
                    return (
                        <img src={photo} alt="photo"/>
                    )
                })}
            </div>

            <div className={styles.contactSeller}>
                <h3>Fale com o vendedor</h3>
                <a href="#"><img src="/whatsapp.png" alt="Whatsapp"/></a>
                <a href="#"><img src="/new-email.png" alt="Email"/></a>
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