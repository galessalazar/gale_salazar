import  { useEffect } from "react";

// MOUNING -behind the scenes, react loads resume component for the first time by calling resume func, sets up the hooks below and gets ready to render, react does it when it hits <Resume /> in jsx tree

const Resume = () => {
    // hook runs after the component renders and empty array means it only runs once 
  useEffect(() => {
    // tells browser to open the pdf file in a new browser tab and the blank is the target
    window.open("/Gale_Salazar_Portfolio_Resume.pdf", "_blank");
  }, []);


};

export default Resume;

