export function Login () {
    return (
        <div>
            <div>
                <form action="/users" method="post">
                    <input type="text" name="name" value="name" placeholder="Usuário"/>
                    <input type="text" name="password" value="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>
                </form>
            </div> 
        </div>
    )
}