// import "./TypeWriterWithSound.css";
import styled from "styled-components";
import PropTypes from "prop-types";

const TypeWriterWithSound = ({ text }) => {
  return (
    <Wrapper>
      <Text $text={text}>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: black;
`;

const Text = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: white;
  animation: typing 4s steps(${(props) => props.$text.length}) 1 normal forwards;
  white-space: nowrap;
  overflow: hidden;

  
  `;


  const typingAnimation = `
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

Text.globalStyle = typingAnimation;

TypeWriterWithSound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypeWriterWithSound;
