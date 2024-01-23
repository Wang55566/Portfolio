import { Html } from "@react-three/drei";

const ContactInfo = (props) => {
  return (
    <>
      <Html
        {...props}
        style={{
          fontSize: "26px",
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
      </Html>
    </>
  );
};

export default ContactInfo;
