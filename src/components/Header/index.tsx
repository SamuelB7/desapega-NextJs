import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.png" alt="Logomarca" />

            <div className={styles.searchInput}>
                <input type="text" name="search" placeholder="Procurar produto" />
                <button type="submit">Buscar</button>
            </div>

            <div>
                <a href="#">Entrar</a>
                <a href="#">Criar Conta</a>
            </div>
        </header>
    )
}