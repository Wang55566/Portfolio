import { Html } from "@react-three/drei";

const HtmlProjectCard = (props) => {
  const { title, image_src, description, link_url, repo, position } = props;
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    width: "42vw",
    height: "70vh",
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

  const linkStyle = {
    backgroundColor: "#ffc0cb",
    color: "#000",
    borderRadius: "8px",
    padding: "8px 8px",
    boxShadow: "1px 1px 1px #888",
    transition: "background-color 0.3s",
    cursor: "pointer",
    marginTop: "5px",
    fontSize: "15px",
    fontFamily: "Bree,Serif",
    fontWeight: "bold",
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#ffb6c1";
    e.target.style.transform = "scale(1.05)";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#ffc0cb";
    e.target.style.transform = "scale(1)";
  };

  return (
    <Html position={position}>
      <div style={cardStyle}>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Kalam",
            fontSize: "30px",
            marginBottom: "5px",
            color: "#ffc0cb",
          }}
        >
          {title}
        </p>
        <img src={image_src} style={imageStyle} />
        <p style={{ marginTop: "25px", fontSize: "17px", fontFamily: "Kanit" }}>
          {description}
        </p>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <a
            href={link_url}
            target="_blank"
            style={linkStyle}
            title="Click to visit the link"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Link
          </a>
          <a
            href={repo}
            target="_blank"
            style={{ ...linkStyle, marginLeft: "30px" }}
            title="See the repo"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Repo
          </a>
        </div>
      </div>
    </Html>
  );
};

export default HtmlProjectCard;
