import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [title, setTitle] = useState("My Living Room");
  const navigate = useNavigate();

  return (
    <Flex
      h="85px"
      justifyContent="space-between"
      alignItems="center"
      marginX={10}
    >
      <IconButton
        icon={<FaHome />}
        aria-label="Home"
        onClick={() => {
          navigate("/");
          setTitle("My Living Room");
        }}
      />
      <Text
        fontSize={40}
        color="#FDF5FD"
        fontFamily="Lobster"
        whiteSpace="nowrap"
      >
        {title}
      </Text>
      <Dropdown setTitle={setTitle} />
    </Flex>
  );
};

export default NavBar;
