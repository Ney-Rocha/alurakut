import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import{ AlurakutMenu } from "../src/lib/AlurakutCommons";

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
  const githubUser = "ney-rocha"
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
            Bem vindo
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <Box>
            Pessoas da Comunidade
          </Box>
          <Box>
            Comunidade
          </Box>
        </div>   
        
      </MainGrid>
    </>
  )
}
