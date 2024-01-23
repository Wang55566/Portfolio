import { Grid, GridItem } from "@chakra-ui/react"
import Main from "./Main"
import Footer from "./Footer"

const HomePage = () => {

  return (
    <Grid
        templateAreas={`
                  "main"
                  "footer"`}
        gridTemplateRows={"100% 50px"}
        height='100vh'
      >
        <GridItem area={"main"}>
          <Main />
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
  )
}

export default HomePage
