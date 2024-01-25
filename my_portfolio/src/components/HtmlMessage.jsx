import { Html } from "@react-three/drei";
import useStore from "../store";

const HtmlMessage = (props) => {
  const { message } = useStore();

  return (
    <>
      <Html
        {...props}
        style={{
          color: "#333333",
          fontWeight: "bold",
          fontSize:'1.3vw',
          fontFamily:'Quicksand, sans-serif',
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <span>{message}</span>
      </Html>
    </>
  );
};

export default HtmlMessage;
