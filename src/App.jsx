import { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Modal from "./components/modal";
import TypeWriterWithSound from "./components/TypeWriterWithSound";
import ProjectsPage from "./components/ProjectsPage";
import Resume from "./pages/Resume";

const App = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const fullText = "Projects";
  const navigate = useNavigate();

  const startTyping = () => {
    setShowTyping(true);
    setOpen(false);

    const sound = new Audio("/mechanical_keyboard.ogg");
    // toy with the preload or try converting to different file still laggy at first load
    sound.preload = 'auto';

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
        setTimeout(typeLetter, 100);
      }
    };
         

    
 typeLetter();
  };

  useEffect(() => {
    if (text === fullText) {
      setTimeout(() => {
        setShowTyping(false);
        navigate("/projects");
      }, 900);
    }
  }, [text, navigate]);

  return (
    <>
      {open && <Modal open={open} setOpen={setOpen} onContinue={startTyping} />}

      {showTyping ? (
        <Background>
          <TypeWriterWithSound text={text} />
        </Background>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/intro" />} />
          <Route
            path="/intro"
            element={
              <Background>
                <TypeWriterWithSound text={text} />
              </Background>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      )}
    </>
  );
};

const Background = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  margin: 0;
`;

export default App;
