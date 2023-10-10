import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Gameprops {
  game: Game;
}

const GameCard = ({ game }: Gameprops) => {
  return (
    <Card borderRadius={20} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {game.parent_platforms.map(
          (
            { platform } // platform next to map is destructed to access platform.name else we need to use platform.platform.name
          ) => (
            <Text>{platform.name}</Text>
          )
        )}
      </CardBody>
    </Card>
  );
};

export default GameCard;
