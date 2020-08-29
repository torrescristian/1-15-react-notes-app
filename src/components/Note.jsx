import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';

const Container = styled.div`
  background-color: ${(props) => (props.editable ? 'white' : '#eee')};
  border-radius: 5px;
  border: 2px solid ${(props) => (props.editable ? 'mediumseagreen' : 'gray')};
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  position: relative;

  .action-container {
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

export default function Note({ id, content, onDelete, onUpdate }) {
  const contentRef = useRef(null);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    contentRef.current.innerHTML = content;
  }, []);

  return (
    <Container editable={editable}>
      <button
        className="btn btn-warning edit"
        onClick={() => {
          if (editable) {
            onUpdate({
              id,
              message: contentRef.current.innerHTML,
            });
          }

          if (!editable) {
            setTimeout(() => {
              contentRef.current.focus();
            }, 0);
          }

          setEditable(!editable);
        }}
      >
        <FontAwesomeIcon icon={faPen} />
      </button>
      <button
        className="btn btn-danger delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <div
        ref={contentRef}
        className="content"
        contentEditable={editable}
      ></div>
    </Container>
  );
}
