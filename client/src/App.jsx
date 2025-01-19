import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Modal from "./components/modal";
import TypeWriterWithSound from "./components/TypeWriterWithSound";
import ProjectsPage from "./components/ProjectsPage";

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
    <Router>
      

      <Background>
        <Modal open={open} setOpen={setOpen} onContinue={startTyping} />
        <TypeWriterWithSound text={text} />

        <Link to='/projects'>
          <h2 style={{ cursor: 'pointer', color: 'white', textAlign: 'center'}}>
            {text}

          </h2>
        </Link>

        <Routes>
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
