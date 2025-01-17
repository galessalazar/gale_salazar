import { useEffect, useState } from "react";
import "./TypeWriterWithSound.css";
import Modal from "./modal";

const TypeWriterWithSound = () => {
  const [text, setText] = useState("");

  const fullText = "Projects";

  const startTyping = () => {
    const sound = new Audio("../../public/mechanical_keyboard.ogg");
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
  return (
    <div>
      <Modal onContinue={startTyping} />
      <h1>{text}</h1>
    </div>
  );
};

export default TypeWriterWithSound;
