import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface searchInputProps {
  onSearch: (searchInput: string) => void;
}

const SearchInput = ({ onSearch }: searchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder="Search games.."></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
