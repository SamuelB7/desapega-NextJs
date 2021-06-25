import styles from './styles.module.scss'
import { Categories } from '../../../components/Categories'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { api } from '../../../services/api'

export default function Category({ products }) {
    return (
        <>
          <Categories />
          <h3 id={styles.h3}>Produtos</h3>
          <div className={styles.productsContainer}>
              {products.map((product) => {
                return (
                  <div key={product.id} className={styles.productCard}>
                    <Link href={product.link} >
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { category_id } = ctx.params

    const { data } = await api.get(`/products/category/${category_id}`, {
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
        link: `http://localhost:3000/products/${product.id}`
      }
    })

    return {
        props: {
            products
        }
    }
}