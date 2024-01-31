import { Html } from "@react-three/drei";

const HtmlProjectCard = ({ image_src, description, link_url, position }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    width: "42vw",
    height: "60vh",
    backgroundColor: "#000000",
    margin: "15px",
    overflowY: "auto",
  };

  const imageStyle = {
    width: "40vw",
    height: "40vh",
    overflow: "hidden",
    objectFit: "cover",
  };

  return (
    <Html position={position} style={{ fontFamily: "Kanit" }}>
      <div style={cardStyle}>
        <img src={image_src} style={imageStyle} />
        <p style={{ marginTop: "40px" }}>{description}</p>
        <a
          href={link_url}
          target="_blank"
          style={{
            color: "#007bff",
            display: "block",
            marginTop: "5px",
            fontSize: "23px",
            fontFamily: "Bree,Serif",
            fontWeight: "bold",
          }}
          title="Click to visit the link"
        >
          Link
        </a>
      </div>
    </Html>
  );
};

export default HtmlProjectCard;
