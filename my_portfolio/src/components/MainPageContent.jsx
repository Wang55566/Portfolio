import { Html } from "@react-three/drei";

const MainPageContent = (props) => {
  return (
    <Html {...props}>
      <div
        style={{
          whiteSpace: "nowrap",
          fontSize: "30px",
          color: "black",
          fontWeight: "bold",
          fontFamily: "Bree Serif",
          background: "transparent",
          padding: "6px",
          borderRadius: 8,
          border: "0.5px solid grey",
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)",
        }}
      >
        <h1 style={{ margin: 0 }}>Hi, this is Seng' house.</h1>
        <h2
          style={{ margin: "10px 0", fontSize: "24px", fontWeight: "normal" }}
        >
          A SOFTWARE ENGINEER and DESIGNER from Taiwan.
        </h2>
        <h3
          style={{ margin: "10px 0", fontSize: "24px", fontWeight: "normal" }}
        >
          I currently live in California.
        </h3>
      </div>
    </Html>
  );
};

export default MainPageContent;
