import { useState } from "react"

export default function BuscarCEP(){
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    
    const fetchData = async () => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            setEndereco(data)
        } catch (error){
            console.error(error)
        }
    }

    return(
        <div className="content">
            <h1>Buscar endereço por CEP</h1>
            <input type="text"
            value={cep}
            placeholder="Digite Aqui"
            onChange={(e) => setCep(e.target.value)} 
            className="input-cep"
            />

            <button onClick={fetchData} className="button-buscar">Buscar</button>
            
            {endereco && (
                <div className="endereco">
                <p>Rua: {endereco.logradouro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Uf: {endereco.uf}</p>
                </div>
            )}
            
        </div>
    )
        
}