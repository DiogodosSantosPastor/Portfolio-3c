export default function AdminS(){
    return(
        <>
            <section className="container-adm">
                <h1>Área do administrador</h1>
                <div>
                <h2>Blogs criados</h2><a href="/CadastroBlog"> <button>Criar novo</button></a>
                </div>
                
            </section>
            <div className="blog">
             <section className="Trecho1_blog">
                <div className="img1_blog">
                     <img src="../public/placeholder.webp" alt="" />            
                </div>
                  <h2>Ecovaso: Desenvolvendo Bioplástico a base de extratos orgânicos</h2>
                  <p>Indústria Sesi Patrocina um novo biopolímero no mercado</p>
                  <button> Ver mais </button>
             </section>
             <section className="Trecho2_blog">
                <div className="img2_blog">
                     <img src="../public/placeholder.webp" alt="" />            
                </div>
                  <h2>Ecovaso: Desenvolvendo Bioplástico a base de extratos orgânicos</h2>
                  <p>Indústria Sesi Patrocina um novo biopolimero no mercado</p>
                  <button> Ver mais </button>
             </section>
             <section className="Trecho3_blog">
                <div className="img3_blog">
                     <img src="../public/placeholder.webp" alt="" />            
                </div>
                  <h2>Ecovaso: Desenvolvendo Bioplástico a base de extratos orgânicos</h2>
                  <p>Indústria Sesi Patrocina um novo biopolimero no mercado</p>
                  <button> Ver mais </button>
             </section>
        </div>
        </>
    )
}