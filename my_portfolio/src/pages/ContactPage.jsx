import { useState, useEffect } from 'react';
import { Button, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background/mountain.png";

// const apiKey = process.env.MESSAGE_API_KEY

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (e) => {
      // e.preventDefault();
      // const formData = new FormData(e.target);

      // formData.append("access_key", "346fbe24-7718-4a0e-8b95-5617ab897cb2");

      // const object = Object.fromEntries(formData);
      // const json = JSON.stringify(object);

      // const res = await fetch("https://api.web3forms.com/submit", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: json,
      // }).then((res) => res.json());

      // if (res.success) {
      //   navigate("/message");
      // }
    navigate("/message");
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
            height:"fit-content",
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
          <Button type="submit" marginTop={10} marginBottom={2} bg="#1a8cff" _hover={{ bg: "#4da6ff" }} style={{fontFamily:"Kalam"}}>
            Send Me a Message
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
