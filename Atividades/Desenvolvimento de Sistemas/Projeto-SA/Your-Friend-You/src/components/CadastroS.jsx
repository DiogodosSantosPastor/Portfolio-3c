export default function CadastroS(){
    return(
        <section className="container-cadastro">
        <div className="cadastro-div">
            <h1>Cadastrar</h1>
            <div className="cadastro-div2">
                <label>Nome:</label>
                <input type="text" />
                <label>Sobrenome:</label>
                <input type="text" />
                <label>Idade:</label>
                <input type="number" min= "1" max= "100" />
                <label>Email:</label>
                <input type="text" />
                <label>Numero:</label>
                <input type="number" />
                <label>Usuário:</label>
                <input type="text" name="" id="usuId" />
                <label>Senha:</label>
                <input type="password" name="" id="senId" />
                <a href="/Login"><button>Cadastrar</button></a>
            </div>
        </div>
        </section>
    )
}

