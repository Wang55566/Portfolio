import { useEffect } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background/mountain.png";

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
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
        }}
      >
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          marginTop="25vh"
          bg="rgba(45, 45, 45, 0.8)"
        >
          <AlertIcon boxSize="50px" mr={0} />
          <AlertTitle mt={4} mb={1}>
            Message Sent!
          </AlertTitle>
          <AlertDescription maxWidth="sm" fontFamily="Kanit">
            Thanks for sending me a message. I will get back to you soon.
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
};

export default ContactMessage;
