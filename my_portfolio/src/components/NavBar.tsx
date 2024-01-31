import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import HomeButton from "./HomeButton";
import Title from "./Title";

const NavBar = () => {
  const [title, setTitle] = useState("My Living Room");

  return (
    <Flex
      h="100px"
      justifyContent="space-between"
      alignItems="center"
      marginX={10}
    >
      <HomeButton setTitle={setTitle} />
      <Title title={title} />
      <Dropdown setTitle={setTitle} />
    </Flex>
  );
};

export default NavBar;
