import React from "react";
import { Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface PlatformIconList {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconList) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
