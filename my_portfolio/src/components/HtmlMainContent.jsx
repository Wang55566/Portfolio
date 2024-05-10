import { useState } from "react";
import { Html } from "@react-three/drei";
import profile_image from "../assets/profile/profile.jpg";
import useStore from "../store";

const MainPageContent = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setMessage } = useStore();

  const containerStyle = {
    whiteSpace: "nowrap",
    color: "black",
    fontWeight: "bold",
    fontFamily: "Bree Serif",
    fontSize: "1.7vw",
    background: "transparent",
    padding: "15px",
    borderRadius: "8px",
    border: "0.5px solid grey",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)",
    cursor: isHovered ? "pointer" : "auto",
    width: "19vw",
  };

  const handleOnMouseOver = () => {
    setIsHovered(true);
    setMessage("Discover Me More!");
  };

  const handleOnMouseDown = () => {
    setIsHovered(false);
    setMessage("Welcome to My Portfolio!");
  };

  return (
    <Html {...props}>
      <div
        style={{
          ...containerStyle,
          transition: "all 1.5s",

        }}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseDown}
      >
        <h1>Hi, this is Seng' house.</h1>
      </div>
      {isHovered && (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.15)",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "start",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
            marginTop: "25px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={profile_image} alt="profile" width="150vw" style={{borderRadius: "10px"}}/>
          </div>
          <div
            style={{
              fontFamily: "Kanit",
              fontSize: "1.1vw",
              color: "green",
              marginTop: "10px",
              whiteSpace: "nowrap",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <p>Hey there!</p>
            <p>I'm a SOFTWARE DEVELOPER</p>
            <p>& an enthusiastic amateur designer</p>
            <p>from Taiwan.</p>
            <p>I currently live in California.</p>
            <p>Welcome to my digital playground!</p>
          </div>
        </div>
      )}
    </Html>
  );
};

export default MainPageContent;
