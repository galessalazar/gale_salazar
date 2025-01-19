import { useState } from "react";
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
        setText((prev) => prev + fullText.charAt(index));
        sound.currentTime = 0;
        sound.play();
        index++;
        setTimeout(typeLetter, 400);
      }
    };

    typeLetter();
  };

  const colorchange = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    margin: 0,
  };

  return (
    <>
      <div style={colorchange}></div>

      <Modal open={open} setOpen={setOpen} onContinue={startTyping} />
      <TypeWriterWithSound text={text} />
    </>
  );
};

export default App;
