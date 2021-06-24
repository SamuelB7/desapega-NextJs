import styles from './styles.module.scss'

export function Categories() {
    return (
        <div className={styles.categoriesContainer}>
            <h3><a href="/category/fbe684d9-4663-4bf2-aa66-ce86b1433ef9">Smartphones</a></h3>
            <h3><a href="/category/0bab9c32-5df4-435d-a1c8-8f5bcaae2886">Hardware</a></h3>
            <h3><a href="/category/c58982e5-b524-4e32-81a0-548d5dc8d525">Automóveis e peças</a></h3>
            <h3><a href="/category/0df4f96f-a8c5-40a2-aa4b-3d69803d3c0a">Computadores e Notebooks</a></h3>
            <h3><a href="/category/3dbd37f0-d50e-4f04-91f5-3831dfa70323">Videogame e Acessórios</a></h3>
            <h3><a href="/category/f04e9cb3-2cb8-42d0-8f8e-81275ff11f05">Imóveis</a></h3>
        </div>
    )
}