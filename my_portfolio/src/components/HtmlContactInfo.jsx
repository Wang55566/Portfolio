import { Html } from "@react-three/drei";
import useStore from "../store";

const ContactInfo = (props) => {
  const { setMessage } = useStore();

  const handleMouseOver = (message, e) => {
    setMessage(message);
    if (e) {
      e.currentTarget.style.transform = "scale(1.3)";
      e.currentTarget.style.transition = "transform 0.5s ease-in";
    }
  };

  const handleMouseOut = (e) => {
    setMessage("Welcome to My Portfolio!");
    if (e) {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.transition = "transform 0.5s ease-in";
    }
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
          <div
            onMouseOver={() => {
              handleMouseOver("My current location.");
            }}
            onMouseOut={(e) => {
              handleMouseOut(e);
            }}
          >
            <div
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <p>Los Angles, California</p>
            </div>
          </div>
          <div
            onMouseOver={(e) => {
              handleMouseOver("Call my number!", e);
            }}
            onMouseOut={(e) => {
              handleMouseOut(e);
            }}
          >
            <a
              href="tel:+18008259967"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              (808) 825-9967
            </a>
          </div>
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
              href="https://drive.google.com/file/d/19RH6M0YQ4Q6gnRCjvRTznZg_KA7nljtn/view?usp=sharing"
              style={{
                color: "#F08500",
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
                style={{ color: "#4267B2", marginRight: "8px" }}
                onMouseOver={(e) => {
                  handleMouseOver("Find me on Facebook!", e);
                }}
                onMouseOut={(e) => {
                  handleMouseOut(e);
                }}
              ></i>
            </a>
            <a href="https://github.com/Wang55566" target="_blank">
              <i
                className="fab fa-github"
                style={{ color: "#333", marginRight: "8px" }}
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
        </div>
      </Html>
    </>
  );
};

export default ContactInfo;
