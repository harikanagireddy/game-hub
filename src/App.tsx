import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GamesGrid from "./Components/GamesGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </Flex>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
