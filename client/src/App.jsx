import { useState } from "react";

import Modal from "./components/modal";
import Projects from "./components/TypeWriterWithSound";

const App = () => {
  const [open, setOpen] = useState(true);

  const colorchange = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    margin: 0,
  };

  return (
    <>
      <div style={colorchange}></div>

      <Modal open={open} setOpen={setOpen} />
      <Projects />
    </>
  );
};
export default App;
