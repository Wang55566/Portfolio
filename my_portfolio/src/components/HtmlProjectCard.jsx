import { Html } from "@react-three/drei";

const HtmlProjectCard = ({ image_src, description, link_url, position }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    width: "30vw",
    backgroundColor: "#000000",
    margin:'15px'
  };

  const imageStyle = {
    width: "30vw",
    height: "40vh",
    overflow: "hidden",
    objectFit: "cover",
  };

  return (
    <Html position={position}>
      <div style={cardStyle}>
        <img src={image_src} style={imageStyle} />
        <p>{description}</p>
        <a href={link_url}>Link</a>
      </div>
    </Html>
  );
};

export default HtmlProjectCard;
