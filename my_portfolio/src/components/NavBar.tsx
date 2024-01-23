import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      h="80px"
      justifyContent="space-between"
      alignItems="center"
      marginX={10}
    >
      <IconButton
        icon={<FaHome />}
        aria-label="Home"
        onClick={() => navigate("/")}
      />
      <Text
        fontSize={40}
        color="#FDF5FD"
        fontFamily="Lobster"
        whiteSpace="nowrap"
      >
        My Living Room
      </Text>
      <Dropdown />
    </Flex>
  );
};

export default NavBar;
