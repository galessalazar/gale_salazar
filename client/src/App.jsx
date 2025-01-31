import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Route,
  Routes,
  useNavigate,
  
} from "react-router-dom";
import Modal from "./components/modal";
import TypeWriterWithSound from "./components/TypeWriterWithSound";
import ProjectsPage from "./components/ProjectsPage";

const App = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Projects";
  const navigate = useNavigate();
  console.log(navigate);

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
      }
    };

    typeLetter();
  };

  useEffect(() => {
    if (text === fullText) {
      setTimeout(() => {
        navigate("/projects");
      }, 1000);
    }
  }, [text, navigate]);

  return (
    // <Router basename="/galessalazar/gale_salazar">
      <Background>
        <Modal open={open} setOpen={setOpen} onContinue={startTyping} />
        <TypeWriterWithSound text={text} />

        <h2 style={{ color: "black", textAlign: "center" }}>{text}</h2>

        <Routes>
          {/* <Route
            path="/" 
             element={<Navigate to="/galessalazar/gale_salazar/projects" />} 
       /> */}
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Background>
    // </Router>
  );
};

const Background = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  margin: 0;
`;

export default App;
