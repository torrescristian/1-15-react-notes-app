import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  border: 2px solid gray;
  display: flex;
  flex-direction: column;
  margin: 1rem;

  padding: 0.5rem;
  position: relative;

  .add {
    position: absolute;
    font-size: 1.5rem;
    bottom: 2px;
    right: 2px;
  }

  .btn {
    border-radius: 50%;
    border: unset;
    width: 30px;
    height: 30px;
  }

  .btn-success {
    color: white;
    background-color: mediumseagreen;
  }

  .content {
    height: 3rem;
    overflow: auto;
  }
`;

export default function AddNote({ onCreate }) {
  const contentRef = useRef(null);

  const handleSubmitValue = () => {
    onCreate(contentRef.current.innerHTML);
    contentRef.current.innerHTML = '';
  };

  return (
    <Container>
      <div ref={contentRef} className="content" contentEditable="true"></div>
      <button className="btn btn-success add" onClick={handleSubmitValue}>
        +
      </button>
    </Container>
  );
}
