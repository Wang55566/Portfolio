import { Html } from "@react-three/drei";
import music from "../assets/music/background_music.mp3";

const ContactInfo = (props) => {
  return (
    <>
      <Html
        {...props}
        style={{
          fontSize: "1.5vw",
          color: "black",
          fontFamily: "Kalam",
          whiteSpace: "nowrap",
        }}
      >
        <div>
          <p>15536 Faith St.</p>
          <p>Fontana, CA 92336</p>
          <p>(808)8259967</p>
          <div>
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
          <div>
            <a
              href="https://drive.google.com/file/d/1PDS5bv6GUGOjvg_udVAlBV0Pnr2HqiKT/view?usp=sharing"
              style={{
                color: "#007bff",
                fontWeight: "bold",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume (PDF)
            </a>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "45px",
              width: "8vw",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <a href="https://www.facebook.com/wang6hawaii/" target="_blank" title='Connect with me on Facebook!'>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/Wang55566" target="_blank" title='Discover my GitHub!'>
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/sengkhooi" target="_blank" title='Explore my Instagram!'>
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div style={{ marginTop: "20px" }}>
            <audio
              controls
              src={music}
              style={{ width: "100%", maxWidth: "300px" }}
              title="Play background music"
            ></audio>
          </div>
        </div>
      </Html>
    </>
  );
};

export default ContactInfo;
