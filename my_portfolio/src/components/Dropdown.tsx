import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const dropDownList: string[] = ["Projects", "Life", "About Me"];
  const navigate = useNavigate();

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
        />
        <MenuList>
          {dropDownList.map((list) => (
            <MenuItem onClick={() => navigate("project")} key={list}>
              {list}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default Dropdown;
