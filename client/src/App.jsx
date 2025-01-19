import { useState } from "react";
import styled from 'styled-components'
import Modal from "./components/modal";
import TypeWriterWithSound from "./components/TypeWriterWithSound";

const App = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Projects";

  const startTyping = () => {
    const sound = new Audio("/mechanical_keyboard.ogg");
    let index = 0;

    const typeLetter = () => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        sound.currentTime = 0;
        sound.play();
        index++;
        setTimeout(typeLetter, 400);
      }
    };

    typeLetter();
  };

 

  return (
    <>
        {/* <div style={colorchange}></div> */}

        <Background>

          <Modal open={open} setOpen={setOpen} onContinue={startTyping} />
          <TypeWriterWithSound text={text} />

      </Background>
    </>
  );
};

const Background = styled.div`
  background-color: black;
  color: white,
  height: 100vh,
  margin: 0,
`;

export default App;
