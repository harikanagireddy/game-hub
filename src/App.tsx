import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GamesGrid from "./Components/GamesGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav"" main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "lfr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
