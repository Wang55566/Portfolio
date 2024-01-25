import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <>
      <Html
        center
        style={{
          color: "grey",
          fontStyle: "italic",
          whiteSpace: "nowrap",
          fontSize: "35px",
          position: "relative",
        }}
      >
        {progress.toFixed(0)} % loaded
        <div
          style={{
            width: `${progress}%`,
            height: "10px",
            background: "black",
            position: "absolute",
          }}
        ></div>
      </Html>
    </>
  );
};

export default Loader;
