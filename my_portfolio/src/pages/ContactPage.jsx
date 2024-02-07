import { Button, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background/mountain.png";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xjvnypdb");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      navigate("/message");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          minHeight: "90vh",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 3s ease-in-out",
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{
            maxWidth: "500px",
            height: "fit-content",
            margin: "50px auto",
            padding: "35px",
            backgroundColor: "#2d2d2d",
            color: "#fff",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            fontFamily: "Kanit",
          }}
        >
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" placeholder="Chris Anderson" />
          <FormLabel marginTop={5} width="100%">
            Email
          </FormLabel>
          <Input type="email" name="email" placeholder="example.mymail.com" />
          <FormLabel marginTop={5} width="100%">
            Phone Number
          </FormLabel>
          <Input type="tel" name="phone" placeholder="800-111-222" />
          <FormLabel marginTop={5}>Message</FormLabel>
          <Textarea
            name="message"
            placeholder="It is nice meeting you!"
            height="150px"
          ></Textarea>
          <Button
            type="submit"
            marginTop={10}
            marginBottom={2}
            bg="#1a8cff"
            _hover={{ bg: "#4da6ff" }}
            style={{ fontFamily: "Kalam" }}
          >
            Send Me a Message
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
