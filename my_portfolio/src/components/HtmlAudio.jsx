import { Html } from "@react-three/drei";
import music from "../assets/music/background_music.mp3";
import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";

const HtmlAudio = (props) => {
  const audioRef = useRef();

  const { position, setAudioPosition } = props;

  useFrame(() => {
    // Update audio position if needed
    if (audioRef.current?.position) {
      audioRef.current.position.copy(position);
    }
  });

  return (
    <>
      <Html {...props}>
        <div style={{ marginTop: "10px" }}>
          <audio ref={audioRef} controls src={music} style={{ width: "13vw" }}></audio>
        </div>
      </Html>
    </>
  );
};

export default HtmlAudio;
