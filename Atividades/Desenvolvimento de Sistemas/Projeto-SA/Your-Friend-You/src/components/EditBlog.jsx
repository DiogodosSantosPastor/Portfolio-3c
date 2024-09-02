export default function EditBlog() {
    return (
        <>
            <div className="editblog">

                <h1 className="cadastrar">Cadastrar Conteúdo do Blog</h1><br /><br />

                <div className="edicao">
                    <input type="text" placeholder='Título do Artigo' className="tituloartigo" /><br /><br />
                    <label className="input-img" ><label>Upload<input type="file" accept="image/png, image/jpeg" id="Imagem" /></label> </label><br /><br />
                    <h3>Conteúdo do Artigo</h3>
                    <textarea className="conteudo"></textarea><br /><br />
                    <button className="cancelar">Cancelar</button> <button className="salvar">Salvar</button>
                </div>
            </div>


        </>
    )
}