import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: #eee;
  position: relative;

  .action-container {
    /* display: flex;
    flex: 1 1 0%;
    justify-content: space-around; */
    position: absolute;
  }

  .btn {
    border: unset;
    height: 25px;
    width: 25px;
    border-radius: 50%;
  }

  .btn-warning {
    background-color: gold;
    color: #333;
  }

  .btn-danger {
    color: white;
    background-color: tomato;
  }

  .delete {
    top: 5px;
    right: 5px;
    position: absolute;
  }

  .edit {
    top: 5px;
    right: 40px;
    position: absolute;
  }
`;

export default function Note({ id, content, handleDelete }) {
  return (
    <Container>
      <button className="btn btn-warning edit">
        <FontAwesomeIcon icon={faPen} />
      </button>
      <button
        className="btn btn-danger delete"
        onClick={() => {
          handleDelete(id);
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <div className="content">{content}</div>
    </Container>
  );
}
