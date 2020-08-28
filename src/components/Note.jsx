import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: #eee;

  .action-container {
    margin-top: 1rem;
    display: flex;
    flex: 1 1 0%;
    justify-content: space-around;
  }

  .btn {
    min-width: 70px;
    min-height: 25px;
    border-radius: 5px;
  }

  .btn-warning {
    background-color: gold;
  }

  .btn-danger {
    color: white;
    background-color: tomato;
  }
`;

export default function Note({ content }) {
  return (
    <Container>
      <div className="content">{content}</div>
      <div className="action-container">
        <button className="btn btn-danger delete">Delete</button>
        <button className="btn btn-warning edit">Edit</button>
      </div>
    </Container>
  );
}
