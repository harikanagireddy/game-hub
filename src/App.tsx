import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"" main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem area="nav" bgColor="blue">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bgColor="violet">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bgColor="red">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
