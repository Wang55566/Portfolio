import { Html } from "@react-three/drei";
import { useState } from "react";

const ContactInfo = (props) => {
  const [hoverMessage, setHoverMessage] = useState("");

  const handleMouseOver = (message, e) => {
    setHoverMessage(message);
    e.currentTarget.style.transform = "scale(1.2)";
  };

  const handleMouseOut = (e) => {
    setHoverMessage("");
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <>
      <Html
        {...props}
        style={{
          fontSize: "1.4vw",
          color: "black",
          fontFamily: "Kalam",
          whiteSpace: "nowrap",
        }}
      >
        <div>
          <p>15536 Faith St.</p>
          <p>Fontana, CA 92336</p>
          <p>(808)8259967</p>
          <div
            onMouseOver={(e) => {
              handleMouseOver("Send me an email!", e);
            }}
            onMouseOut={(e) => {
              handleMouseOut(e);
            }}
          >
            <a
              href="mailto:your.email@example.com"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              wang6@hawaii.edu
            </a>
          </div>
          <div
            onMouseOver={(e) => {
              handleMouseOver("View my resume!", e);
            }}
            onMouseOut={(e) => {
              handleMouseOut(e);
            }}
          >
            <a
              href="https://drive.google.com/file/d/1PDS5bv6GUGOjvg_udVAlBV0Pnr2HqiKT/view?usp=sharing"
              style={{
                color: "#007bff",
                fontWeight: "bold",
              }}
              target="_blank"
            >
              My Resume (PDF)
            </a>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "47px",
              width: "8vw",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <a href="https://www.facebook.com/wang6hawaii/" target="_blank">
              <i
                className="fab fa-facebook"
                style={{ color: "#4267B2" }}
                onMouseOver={(e) => {
                  handleMouseOver("Connect with me on Facebook!", e);
                }}
                onMouseOut={(e) => {
                  handleMouseOut(e);
                }}
              ></i>
            </a>
            <a href="https://github.com/Wang55566" target="_blank">
              <i
                className="fab fa-github"
                style={{ color: "#333" }}
                onMouseOver={(e) => {
                  handleMouseOver("Discover my GitHub!", e);
                }}
                onMouseOut={(e) => {
                  handleMouseOut(e);
                }}
              ></i>
            </a>
            <a href="https://www.instagram.com/sengkhooi" target="_blank">
              <i
                className="fab fa-instagram"
                style={{ color: "#E4405F" }}
                onMouseOver={(e) => {
                  handleMouseOver("Explore my Instagram!", e);
                }}
                onMouseOut={(e) => {
                  handleMouseOut(e);
                }}
              ></i>
            </a>
          </div>
          <div>
            <span
              style={{
                display: "block",
                marginTop: "10px",
                transition: "opacity 0.3s ease",
                opacity: hoverMessage ? 0.8 : 0,
                color: "#001C42",
                fontSize: "23px",
                borderRadius: 8,
                fontFamily: "Titillium Web",
              }}
            >
              {hoverMessage}
            </span>
          </div>
        </div>
      </Html>
    </>
  );
};

export default ContactInfo;
