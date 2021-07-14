import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
// convenção - Componente sempre em maiusculo ,tag em minusculo
// Crase delimita css
const Box = styled.div`  
  background:#ffffff;
  border-radius:8px;
`;

const MainGrid = styled.main`
  display:grid;
  grid-gap:10px;
  padding: 16px;

  @media(min-width: 860px){
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
  
`;


export default function Home() {
  return (
    // tudo que esta dentro do (()parentese) não é obrigatorio a quebra de linha
    //o parenteses lê como javascript 
  <MainGrid>
    {/* <Box style="grid-area: profileArea"></Box> precisa ser camel case == js*/ }
    <div style={{gridArea: 'profileArea'}}>
      <Box>
        Imagem
      </Box>
    </div>
    
    <div style={{gridArea: 'welcomeArea'}}>
      <Box>
        Bem vindo
      </Box>
    </div>

    <div style={{gridArea: 'profileRelationsArea'}}>
      <Box>
        Pessoas da Comunidade
      </Box>
      <Box>
        Comunidade
      </Box>
    </div>   
    
  </MainGrid>
  )
}
