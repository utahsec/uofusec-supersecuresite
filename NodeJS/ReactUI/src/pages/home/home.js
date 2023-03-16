import React from "react";
import { Image, Stack } from "react-bootstrap";
import "./home.css"

export default function Home() {
  return (
    <div className="page">
      <Stack gap={3} className="root-stack">
        <h1 className="Text-Header">Welcome to my cool panda page!</h1>
        <Image
          style={{ maxWidth: 500 }}
          rounded={true}
          src={require("../../images/panda_wave.jpg")}
        />
        <h3 className="Text-Header">Here are some more...</h3>
        <Stack direction="horizontal" gap={3} className="root-stack">
          <Image
            style={{ maxWidth: 350 }}
            rounded={true}
            src={require("../../images/oh-he-eating.webp")}
          />
          <Image
            style={{ maxWidth: 350 }}
            rounded={true}
            src={require("../../images/he-just-relaxing.webp")}
          />
          <Image
            style={{ maxWidth: 350 }}
            rounded={true}
            src={require("../../images/he-just-staring.jpg")}
          />
        </Stack>
      </Stack>
    </div>
  );
}
