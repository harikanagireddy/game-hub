import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface gameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: gameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
