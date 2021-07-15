import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import{ AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/profileRelations";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
// convenção - Componente sempre em maiusculo ,tag em minusculo
// Crase delimita css

function ProfileSidebar(propriedades){
  console.log(propriedades)
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}} />
    </Box>
  )
};

export default function Home() {
  const githubUser = "ney-rocha";

  const pessoasFavoritas = [
    "juunegreiros", 
    "omariosouto", 
    "peas",
     "rafaBallerini",
      "marcobrunodev",
    "felipefialho"]

  return (
    < >
      <AlurakutMenu/>
      {/* tudo que esta dentro do {}chaves não é obrigatorio a quebra de linha*/}
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
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            
            <ul>
            {pessoasFavoritas.map((itemAtual)=> {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`}/>
                    <span>{itemAtual}</span>
                  </a>
                </li>
                )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidade
          </Box>
        </div>   
        
      </MainGrid>
    </>
  )
}
