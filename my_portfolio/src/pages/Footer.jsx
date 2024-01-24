import { Box, Flex, Tooltip } from "@chakra-ui/react";
import {
  faGithubSquare,
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <Flex justifyContent="center" h='35px'>
        <Tooltip hasArrow label="Explore my Instagram!" bg="grey" fontWeight='bold'>
          <Box marginRight={3} marginTop={2}>
            <a href="https://www.instagram.com/sengkhooi" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
          </Box>
        </Tooltip>
        <Tooltip hasArrow label="Discover my GitHub!" bg="grey" fontWeight='bold'>
          <Box marginRight={3} marginTop={2}>
            <a href="https://github.com/Wang55566" target="_blank">
              <FontAwesomeIcon icon={faGithubSquare} size="xl" />
            </a>
          </Box>
        </Tooltip>
        <Tooltip hasArrow label="Connect with me on Facebook!" bg="grey" fontWeight='bold'>
          <Box marginRight={3} marginTop={2}>
            <a href="https://www.facebook.com/wang6hawaii/" target="_blank">
              <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
            </a>
          </Box>
        </Tooltip>
      </Flex>
    </>
  );
};

export default Footer;
