import React from "react"

export default function Sobre() {
    return (
      <section id="sobre-nos" className="sec-sobre">
        <div className="container-sobre">
          <div className="text-sobre"> 
            <h1>Sobre Nós</h1><br></br>
            <p>
Olá, nós somos uma equipe de desenvolvedores júnior,
estudantes do Ensino Médio Técnico em Desenvolvimento de Sistemas do 
SESI de São José. Estamos desenvolvendo esse aplicativo a cerca de três anos.
No primeiro ano do ensino médio criamos um conceito inicial e as apresentamos
para os professores da matéria Mundo do Trabalho, porém não possuíamos o
conhecimento necessário para programá-lo ainda. No segundo ano já tínhamos
aprendido alguns fundamentos da programação, porém não o suficiente para
fazermos o aplicativo, por isso reunimos uma equipe de estudantes com mais
experiência na área(que já haviam feito cursos e estágios de programação) e com a
ajuda deles fizemos uma Demo. Já agora no terceiro ano, com o acúmulo de
conhecimentos sobre programação, esperamos conseguir colocar em prática ao
menos uma versão beta para a apresentação do trabalho final e disponibilização ao
público geral.
            </p>
          </div>
        <div className="grupo">
          <img src="grupo.jpeg" alt="" />
        </div>
        </div>
      </section>
    );
  }