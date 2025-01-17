import { useEffect, useState } from "react";
import "./projects.css";


const TypeWriterWithSound = () => {
  const [text, setText] = useState("");
  const fullText = "Projects";

  useEffect(() => {
    const sound = new Audio('../../public/mechanical_keyboard.ogg');
    console.log(sound);

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

    return () => {
        sound.pause();
        sound.currentTime = 0;
    };
  }, [fullText]);

  return <h1>{text}</h1>;
};
export default TypeWriterWithSound;
