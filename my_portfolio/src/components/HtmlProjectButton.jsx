import { Html } from "@react-three/drei";

const HtmlProjectButton = (props) => {
  const { options, setTitle, setImage, setDescription, setUrl, setRepo } =
    props;

  const handleOnClick = (e) => {
    e.stopPropagation();
    setTitle(options.title);
    setImage(options.image);
    setDescription(options.description);
    setUrl(options.url);
    setRepo(options.repo);
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
          {options.title}
        </button>
      </Html>
    </>
  );
};

export default HtmlProjectButton;
