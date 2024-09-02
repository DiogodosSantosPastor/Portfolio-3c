export default function () {
    return(
        <section className="container-login">
        <div className="login-div">
            <h1>Login</h1>
            <div className="login-div2">
                <label>Usuário:</label>
                <input type="text" name="" id="usuId" />
                <label>Senha:</label>
                <input type="password" name="" id="senId" />
                <a href="/Admin"><button onClick={Check}>Login</button></a>
                <a href="/Cadastro">Criar Conta</a>
            </div>
        </div>
        </section>
    )
}

function Check(){
    localStorage.getItem()
}