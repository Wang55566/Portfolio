import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ setTitle }) => {
  const dropDownList: string[] = ["Projects", "Life", "Contact"];
  const navigate = useNavigate();

  return (
    <>
      <Menu>
        <Tooltip label="Menu">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            fontSize={{ base: "18px", md: "22px" }}
            padding={2}
          />
        </Tooltip>
        <MenuList>
          {dropDownList.map((list) => (
            <MenuItem
              onClick={() => {
                navigate(`${list}`);
                setTitle(`My ${list}`);
              }}
              key={list}
              fontFamily="Oswald"
              fontSize={19}
            >
              {list}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default Dropdown;
