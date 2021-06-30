import { useState } from 'react'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export default function CreateAccount({name, email, tel, password, avatar}) {
    
    function imagePreview() {
        let avatar = document.querySelector('input[id=avatar]').files[0]
        let preview = document.querySelector('#avatarPreview')

        let reader = new FileReader()
        reader.onloadend = function() {
            preview.src = reader.result
        }

        reader.readAsDataURL(avatar)
    }

    /* function Form() {
        const registerUser = async event => {
            event.preventDefault()

            const res = await fetch('/user/register', {
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                    tel: event.target.tel.value,
                    password: event.target.password.value,
                    avatar: event.target.avatar.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            
            const result = await res.json()
        }
    } */

    return (
        <div className={styles.createAccount}>
            <h3>Criar Conta</h3>
            <form action="/user/register" method="POST" encType="multipart/form-data">
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name={name} id="name"/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name={email} id="email"/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="tel">Telefone</label>
                    <input type="text" name={tel} id="tel"/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name={password} id="password"/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" name={avatar} id="avatar" onChange={imagePreview}/>
                </div>
                <br />

                <div>
                    <img className={styles.avatarPreview} id="avatarPreview" src="" alt="avatar" />
                </div>
                <br />
                <button type="submit">Criar Conta</button>
            </form>
        </div>
    )
}

export const createAccount = async(name, email, tel, password, avatar) => {
    const { data } = await api.post('/user/register', { name, email, tel, password, avatar })
    console.log(data)

    return {
        props: {
            name: data.name,
            email: data.email,
            tel: data.tel,
            password: data.password,
            avatar: data.avatar
        }
    }
}