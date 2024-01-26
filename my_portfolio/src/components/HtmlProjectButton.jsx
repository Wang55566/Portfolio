import { Html } from "@react-three/drei";

const HtmlProjectButton = (props) => {
  const { options, setImage, setDescription, setUrl } = props;

  const handleOnClick = (e) => {
    e.stopPropagation();
    setImage(options.image);
    setDescription(options.description);
    setUrl(options.url);
  };

  return (
    <>
      <Html {...props}>
        <button
          onClick={handleOnClick}
          style={{
            whiteSpace: "nowrap",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#3498db",
            color: "#fff",
            cursor: "pointer",
            fontSize: "2.1vh",
            fontFamily: "Oswald",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#2980b9";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#3498db";
          }}
        >
          {options.buttonText}
        </button>
      </Html>
    </>
  );
};

export default HtmlProjectButton;
