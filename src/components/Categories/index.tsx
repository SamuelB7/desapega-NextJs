import styles from './styles.module.scss'

export function Categories() {
    return (
        <div className={styles.categoriesContainer}>
            <h3><a href="#">Smartphones</a></h3>
            <h3><a href="#">Hardware</a></h3>
            <h3><a href="#">Automóveis e peças</a></h3>
            <h3><a href="#">Computadores e Notebooks</a></h3>
            <h3><a href="#">Videogame e Acessórios</a></h3>
            <h3><a href="#">Imóveis</a></h3>
        </div>
    )
}