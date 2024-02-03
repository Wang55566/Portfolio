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
    color: "#fff",
    borderRadius: "10px",
    padding: "10px 15px",
    boxShadow: "2px 2px 1px #888",
    transition: "background-color 0.3s",
    cursor: "pointer",
    marginTop: "5px",
    fontSize: "15px",
    fontFamily: "Bree,Serif",
    fontWeight: "bold",
  };

  return (
    <Html position={position} style={{ fontFamily: "Kanit" }}>
      <div style={cardStyle}>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
          }}
        >
          {title}
        </p>
        <img src={image_src} style={imageStyle} />
        <p style={{ marginTop: "40px" }}>{description}</p>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <a
            href={link_url}
            target="_blank"
            style={linkStyle}
            title="Click to visit the link"
            onmouseover="this.style.backgroundColor='#ff8c94'; this.style.transform='scale(1.05)';"
            onmouseout="this.style.backgroundColor='#ffc0cb'; this.style.transform='scale(1)';"
          >
            Link
          </a>
          <a
            href={repo}
            target="_blank"
            style={{ ...linkStyle, marginLeft: "30px" }}
            title="See the repo"
          >
            Repo
          </a>
        </div>
      </div>
    </Html>
  );
};

export default HtmlProjectCard;
