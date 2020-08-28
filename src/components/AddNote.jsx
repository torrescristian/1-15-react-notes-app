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
    min-width: 70px;
    min-height: 25px;
    border-radius: 5px;
  }

  .btn-success {
    color: white;
    background-color: mediumseagreen;
  }
`;

export default function AddNote() {
  return (
    <Container>
      <button className="btn btn-success add">Add</button>
    </Container>
  );
}
