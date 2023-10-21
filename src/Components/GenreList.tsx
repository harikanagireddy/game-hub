import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getOptimizedImages from "../services/getOptimizedImages";

interface selectedGenreProps {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: selectedGenreProps) => {
  const { data, isLoading, error } = useGenres();
  //didnot remove below 2 lines in case in future we decide to fetch genres from server then we need spinner
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getOptimizedImages(genre.image_background)}
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
