import { useState } from 'react'
import styles from './styles.module.scss'

export default function CreateAccount() {
    let [avatar, setAvatar] = useState("")
    
    function imagePreview() {
        let avatar = document.querySelector('input[name=avatar]').files[0]
        let preview = document.querySelector('#avatarPreview')

        let reader = new FileReader()
        reader.onloadend = function() {
            preview.src = reader.result
        }

        reader.readAsDataURL(avatar)
    }

    return (
        <>
        <div className={styles.createAccount}>
            <h3>Criar Conta</h3>
            <form action="/user/" method="post">
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name"/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email"/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="tel">Telefone</label>
                    <input type="text" name="tel" id="tel"/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password"/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" name="avatar" id="avatar" onChange={imagePreview}/>
                </div>
                <br />

                <div>
                    <img className={styles.avatarPreview} id="avatarPreview" src="" alt="avatar" />
                </div>
                <br />
                <button type="submit">Criar Conta</button>
            </form>
        </div>
        </>
    )
}