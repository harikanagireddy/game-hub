import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";

const navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="50px" />
      <SwitchColorMode />
    </HStack>
  );
};

export default navbar;
