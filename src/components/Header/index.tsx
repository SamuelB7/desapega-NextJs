import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
           <a href="/"><img src="/logo1.png" alt="Logomarca" /></a>

            <div className={styles.searchInput}>
                <input type="text" name="search" placeholder="Procurar produto" />
                <button type="submit">
                    <img src="/loupe.png" alt="Buscar" />
                </button>
            </div>

            <div>
                <a href="#">Entrar</a>
                <a href="#">Criar Conta</a>
            </div>
        </header>
    )
}