import styles from './styles.module.scss'

export function Products() {
    return (
        <>
        <h3>Produtos</h3>
        <div className={styles.productsContainer}>
            <div className={styles.productCard}>
                <a href="product/id">
                    <img src="#" alt="Foto do produto" />
                    <h4>Nome do Produto</h4>
                    <h4>Preço</h4>
                    <input type="hidden" value="id" />
                </a>
            </div>
        </div>
        </>
    )
}