import { Categories } from '../components/Categories'
import { Products } from '../components/Products'

import { GetStaticProps } from 'next'
import { api } from '../services/api'

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
    <Products />
    <p>{JSON.stringify(props.products)}</p>
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
