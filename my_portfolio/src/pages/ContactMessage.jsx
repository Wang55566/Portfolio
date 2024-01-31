import { useEffect } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ContactMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3500);

    return () => clearTimeout(timeout);
  }, [navigate]);
  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        marginTop="25vh"
      >
        <AlertIcon boxSize="50px" mr={0} />
        <AlertTitle mt={4} mb={1}>
          Message Sent!
        </AlertTitle>
        <AlertDescription maxWidth="sm" fontFamily="Kanit">
          Thanks for sending me a message. I will get back to you soon.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default ContactMessage;
