import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Modal from "./components/modal";
import TypeWriterWithSound from "./components/TypeWriterWithSound";
import ProjectsPage from "./components/ProjectsPage";

const App = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Projects";

  const startTyping = () => {
    // const sound = new Audio("/mechanical_keyboard.ogg");
    const sound = new Audio('/galessalazar/gale_salazar/mechanical_keyboard.ogg');
    sound.onerror = () => {
      console.error('failed audio');
    };
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
    <Router basename="/galessalazar/gale_salazar">
      

      <Background>
        <Modal open={open} setOpen={setOpen} onContinue={startTyping} />
        <TypeWriterWithSound text={text} />

        <Link to='/projects'>
          <h2 style={{ cursor: 'pointer', color: 'white', textAlign: 'center'}}>
            {text}

          </h2>
        </Link>

        <Routes>
          <Route path="/" element={<Navigate to='/projects'/>} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Background>
      </Router>
  );
};

const Background = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  margin: 0;
`;

export default App;
