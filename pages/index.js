import React from "react"
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import{ AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/profileRelations";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
// convenção - Componente sempre em maiusculo ,tag em minusculo
// Crase delimita css

function ProfileSidebar(propriedades){
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}} />
      <hr/>
    <p>
      <a href={`https://github.com/${propriedades.githunUser}`} className="boxLink">
        @{propriedades.githubUser}
      </a>
    </p>
    <hr />
    <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
};

export default function Home() {
  React.useState
  const githubUser = "ney-rocha";
  const [comunidades, setComunidades] = React.useState([{
    id:'13412341324',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  // const comunidades = ["Alurakut"];

  const pessoasFavoritas = [
    "juunegreiros", 
    "omariosouto", 
    "peas",
    "rafaBallerini",
    "marcobrunodev",
    "felipefialho"]

  return (
    < >
      <AlurakutMenu githubUser={githubUser}/>
      {/* tudo que esta dentro do {}chaves não é obrigatório a quebra de linha*/}
      {/*/o chaves/Bigodinho lê como javascript */}
      <MainGrid>
        {/* <Box style="grid-area: profileArea"></Box> precisa ser camel case == js*/ }
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
           <h1 className="title">Bem Vindo</h1>
           <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              console.log(e);
              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              }
              // comunidades.push("Alura Stars");
              

              if((comunidade.title == "" && comunidade.image =="") || (comunidade.image != "" && comunidade.title == "")){
                alert('Você precisa preencher pelo menos o campo de nome para criar uma comunidade')
              }else if(comunidade.title != "" && comunidade.image ==""){
                  comunidade.image = 'https://picsum.photos/300?random=2';
                  alert('A comunidade será criada com uma imagem padrão')
                  const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas);
              }else{
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);                
              }
            }} >
              <div>
                <input
                  placeholder="Qual vai ser o nome de sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome de sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  type="text"
                />
              </div>

              <button>
                Criar comunidade
              </button>
              
            </form>

          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>

          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
          <ul>
            {comunidades.map((itemAtual)=> {
              return (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                    <img src={itemAtual.image}/>
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
                )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            
            <ul>
            {pessoasFavoritas.map((itemAtual)=> {
              return (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`} >
                    <img src={`https://github.com/${itemAtual}.png`}/>
                    <span>{itemAtual}</span>
                  </a>
                </li>
                )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>
          
        </div>   
        
      </MainGrid>
    </>
  )
}
