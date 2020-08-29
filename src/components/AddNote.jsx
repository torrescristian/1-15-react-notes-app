import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  .add {
    font-size: 2rem;
    margin: 1rem;
    padding: 0 1rem;
  }

  .btn {
    border-radius: 50%;
    border: unset;
    width: 50px;
    height: 50px;
  }

  .btn-success {
    color: white;
    background-color: mediumseagreen;
  }
`;

export default function AddNote() {
  const handleClickAdd = () => {
    console.log('handleClickAdd');
  };

  return (
    <Container>
      <button className="btn btn-success add" onClick={handleClickAdd}>
        +
      </button>
    </Container>
  );
}
