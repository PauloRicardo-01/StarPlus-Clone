import { useEffect, useState } from "react";
import { Container } from "../styles/global";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.onload = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      document.getElementsByClassName("");
    };
  }, []);

  return (
    <Container>
      <h1>Star+ Clone Structure</h1>
    </Container>
  );
}
