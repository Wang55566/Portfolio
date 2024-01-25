import { IconButton, Tooltip } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  setTitle: (title: string) => void;
}

const HomeButton = ({ setTitle }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Tooltip label="Go back to Homepage">
        <IconButton
          icon={<FaHome />}
          aria-label="Home"
          onClick={() => {
            navigate("/");
            setTitle("My Living Room");
          }}
          fontSize={{ base: "18px", md: "22px" }}
          padding={2}
        />
      </Tooltip>
    </>
  );
};

export default HomeButton;
