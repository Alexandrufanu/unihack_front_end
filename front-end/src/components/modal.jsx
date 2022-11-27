// import './modal.css';
<<<<<<< HEAD
/*
import React, { useState } from 'react';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
=======

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
>>>>>>> 2622e28b8e335d74d2c4b70591c6ad35377b687a
import '../index.css';


function LogInModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} class = "Sign_In" >
        Sign In
      </Button>
<<<<<<< HEAD
      
=======

>>>>>>> 2622e28b8e335d74d2c4b70591c6ad35377b687a
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

<<<<<<< HEAD
export default LogInModal;*/
=======
export default LogInModal;
>>>>>>> 2622e28b8e335d74d2c4b70591c6ad35377b687a
