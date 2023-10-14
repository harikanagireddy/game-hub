import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getOptimizedImages from "../services/getOptimizedImages";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getOptimizedImages(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
