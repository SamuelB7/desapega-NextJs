import { Categories } from '../components/Categories'
import { Products } from '../components/Products'
import { GetStaticProps } from 'next'
import { api } from '../services/api'

import styles from './home.module.scss'

interface HomeProducts {
  id: string
  name: string
  price: string
  file: string
}

interface HomeProps {
  products: HomeProducts[]
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Categories />
      <h3>Produtos</h3>
      <div className={styles.productsContainer}>
          {props.products.map((product, index) => {
            return (
              <div className={styles.productCard}>
              <a href={`product/${product.id}`}>
                  <img src={product.file} alt={product.name} />
                  <h4>{product.name}</h4>
                  <h4>{product.price}</h4>
                  <input type="hidden" value={product.id} />
              </a>
          </div>
            )
          })}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('products', {
    params: {
      _limit: 10
    }
  })
  
  return {
    props: {
      products: data
    },
    revalidate: 60 * 60 * 8
  }
}
