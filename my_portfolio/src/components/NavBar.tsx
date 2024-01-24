import { Flex, IconButton, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [title, setTitle] = useState("My Living Room");
  const navigate = useNavigate();

  const iconSize = useBreakpointValue({ base: '18px', md: '22px'});
  const textSize = useBreakpointValue({ base: '30px', md: '40px'});

  return (
    <Flex
      h='100px'
      justifyContent='space-between'
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
        style={{ fontSize: iconSize }}
        marginRight={3}
      />
      <Text
        fontSize={textSize}
        color="#FDF5FD"
        fontFamily="Lobster"
        whiteSpace="nowrap"
        textAlign={{ base: "center", md: "left" }}
      >
        {title}
      </Text>
      <Box marginLeft={3}>
        <Dropdown setTitle={setTitle} />
      </Box>
    </Flex>
  );
};

export default NavBar;
