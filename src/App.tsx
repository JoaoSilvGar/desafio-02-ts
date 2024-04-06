import { Layout } from "./components/Layout";
import { Box, Button, Card, Center, ChakraProvider, Heading, Input, SimpleGrid } from "@chakra-ui/react"
import { login } from "./services/login";


// const Box = styled.div`
//   background-color: orange;
//   border-radius: 25px;
//   padding-left: 10px;
// `

// const H1 = styled.h1`
//   font-family: Arial;
// `

function App() {
  return (
    // Mesma coisa que <React.Fragment></React.Fragment>
    <ChakraProvider>
      <>
        <Layout>
          {/* <Box>
            <H1>Faça o login</H1>
          </Box> */}
          <Box minHeight="100vh" backgroundColor={"#1E192C"} padding={"25px"} >
            <SimpleGrid backgroundColor={"white"} borderRadius={"25px"} padding={"10px"} rowGap={"5px"}>
              <Heading textAlign={"center"}>Faça o login</Heading>
              <Input placeholder="Email" borderRadius={"25px"} />
              <Input placeholder="Password" borderRadius={"25px"} />
              <Button onClick={login} bg={"#1E192C"} color={"white"} width={"100%"}>Entrar</Button>
            </SimpleGrid>
          </Box>
        </Layout>
      </>
    </ChakraProvider>


  );
}

export default App;
