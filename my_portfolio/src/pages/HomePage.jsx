import { Grid, GridItem } from "@chakra-ui/react"
import Main from "./Main"
import Footer from "./Footer"

const HomePage = () => {

  return (
    <Grid
        templateAreas={`
                  "main"
                  "footer"`}
        gridTemplateRows={"100% 100%"}
        height='100vh'
      >
        <GridItem bg="gray.300" area={"main"}>
          <Main />
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
  )
}

export default HomePage
