import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" />
      <p>Nav Bar</p>
    </HStack>
  );
};

export default navbar;
