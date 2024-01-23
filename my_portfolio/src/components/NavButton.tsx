import { Button } from "@chakra-ui/react";

interface Props {
  title: string;
}

const NavButton = ({ title }: Props) => {
  return <Button variant='unstyled'>{title}</Button>;
};

export default NavButton;
