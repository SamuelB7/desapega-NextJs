import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.png" alt="Logomarca" />

            <p>Desapegue daquilo que você não usa mais!</p>

            <a href="/login">Entrar</a>
        </header>
    )
}