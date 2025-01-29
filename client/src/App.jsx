import { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Modal from "./components/modal";
import TypeWriterWithSound from "./components/TypeWriterWithSound";
import ProjectsPage from "./components/ProjectsPage";

const App = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");
  // const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "Projects";

  const startTyping = () => {
    const sound = new Audio(
      "/galessalazar/gale_salazar/mechanical_keyboard.ogg"
    );
    sound.onerror = () => {
      console.error("failed audio");
    };
    let index = 0;

    const typeLetter = () => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        sound.currentTime = 0;
        sound.play();
        index++;
        setTimeout(typeLetter, 400);
        // } else{
        //   setTypingComplete(true);
      }
    };

    typeLetter();
  };

  return (
    <Router basename="/galessalazar/gale_salazar">
      <Routes>
        <Route
          path="/"
          element={
            <Background>
              <Modal open={open} setOpen={setOpen} onContinue={startTyping} />
              <TypeWriterWithSound text={text} />
            </Background>
          }
        />
        {/* {typingComplete && (
            <h2
              style={{ cursor: "pointer", color: "black", textAlign: "center" }}
              onClick={() => (window.location.href = '/galessalazar/gale_salazar/projects')} >
              {text}
            </h2>
        )
        } */}

        {/* <Route path="/" element={<Navigate to="/projects" />} /> */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
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
