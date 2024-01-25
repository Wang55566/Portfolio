import { Html } from "@react-three/drei";
import music from "../assets/music/background_music.mp3";

const HtmlAudio = (props) => {
  return (
    <>
      <Html
      {...props}
      >
        <div style={{ marginTop: "10px"}}>
            <audio
              controls
              src={music}
              style={{width:'13vw'}}
            ></audio>
          </div>
      </Html>
    </>
  );
};

export default HtmlAudio;
