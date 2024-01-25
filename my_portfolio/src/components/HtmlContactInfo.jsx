import { Html } from "@react-three/drei";
import useStore from "../store";

const ContactInfo = (props) => {
  const { setMessage } = useStore();

  const handleMouseOver = (message, e) => {
    setMessage(message);
    e.currentTarget.style.transform = "scale(1.2)";
  };

  const handleMouseOut = (e) => {
    setMessage("Welcome to My Portfolio!");
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
          <div
            onMouseOver={() => {
              handleMouseOver("Where to find me.");
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
              <p>15536 Faith St.</p>
              <p>Fontana, CA 92336</p>
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
              href="https://drive.google.com/file/d/1PDS5bv6GUGOjvg_udVAlBV0Pnr2HqiKT/view?usp=sharing"
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
        </div>
      </Html>
    </>
  );
};

export default ContactInfo;
