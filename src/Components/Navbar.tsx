import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./Searchinput";

interface searchInputProps {
  onSearch: (searchInput: string) => void;
}

const navbar = ({ onSearch }: searchInputProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={onSearch} />
      <SwitchColorMode />
    </HStack>
  );
};

export default navbar;
