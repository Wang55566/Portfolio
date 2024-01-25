import { Text, Tooltip } from "@chakra-ui/react";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <>
      <Tooltip label="Hi, Welcome!">
        <Text
          fontSize={{ base: "30px", md: "40px" }}
          color="#FDF5FD"
          fontFamily="Lobster"
          whiteSpace="nowrap"
          textAlign={{ base: "center", md: "left" }}
          _hover={{ cursor: "pointer" }}
        >
          {title}
        </Text>
      </Tooltip>
    </>
  );
};

export default Title;
