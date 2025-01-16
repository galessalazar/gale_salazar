
import { useState } from "react";

import Modal from "./components/modal";

 

const App = () => {
  const [open, setOpen] = useState(true)

  const colorchange = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    margin: 0,
  };



  return (
    <>
      <div style={colorchange}></div>

    <Modal open={open} setOpen={setOpen}/>

     </>
)}
export default App;
