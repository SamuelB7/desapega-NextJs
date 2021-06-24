import { Categories } from '../components/Categories'
import { Products } from '../components/Products'
import { GetStaticProps } from 'next'
import { api } from '../services/api'
import Link from 'next/link'

import styles from './home.module.scss'

interface HomeProducts {
  id: string
  name: string
  price: string
  file: string
  link: string
}

interface HomeProps {
  products: HomeProducts[]
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Categories />
      <h3 id={styles.h3}>Produtos</h3>
      <div className={styles.productsContainer}>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.productCard}>
                <Link href={product.link}>
                  <a>
                      <img src={product.file} alt={product.name} />
                      <h4>{product.name}</h4>
                      <h4>{product.price}</h4>
                      <input type="hidden" value={product.id} />
                  </a>
                </Link>
              </div>
            )
          })}
      </div>
    </>
  )
}

//Utilizando SSG
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('products', {
    params: {
      _limit: 10
    }
  })

  const products = data.map(product => {
    return {
      id: product.id,
      name: product.name,
      price: `R$${product.price}`,
      file: product.file,
      link: `products/${product.id}`
    }
  })
  
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 8
  }
}
