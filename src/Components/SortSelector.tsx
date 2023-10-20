import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : Relavance
      </MenuButton>
      <MenuList>
        <MenuItem>Relavance</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
