import  { useEffect, useState} from "react";

const TypeWriterWithSound = () => {
    const [text, setText] = useState('');
    const fullText = 'Projects';

    



useEffect(() => {

    const typingSound = new Audio('./assets/mechanical_keyboard.ogg');

    let index = 0;

    const typeLetter = () => {
        if (index < fullText.length) {
            setText((prev) => prev + fullText.charAt(index));
            typingSound.currentTime=0;
            typingSound.play();
            index++;
            setTimeout(typeLetter, 400);
        }
    };
    
    typeLetter();

}, [fullText]);

return <h1>{text}</h1>;
};
export default TypeWriterWithSound;