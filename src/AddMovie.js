import './App.css';
import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
function AddMovie(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const title=useRef()
    const description=useRef()
    const posterURL=useRef()
    const trailerURL=useRef()
    const rating=useRef()
   
    const handleSave = () => {
        props.handleAddMovie({
            title: title.current.value,
            description: description.current.value,
            posterURL: posterURL.current.value,
            trailerURL: trailerURL.current.value,
            rating: rating.current.value,
        })
        
        handleClose()
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}  style={{height: '100%' ,marginLeft:'8px' ,backgroundColor:'#FF87B2' ,borderColor:'#FF87B2'}} className="add" >
          Add a New Movie
        </Button>
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header >
                <Modal.Title>Add a Movie</Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <div>
            <input type="text" name="title" placeholder="title" ref={title} style={{width:"400px"}}></input>
          </div>
          <div>
            <input type="text" name="description" placeholder="description" ref={description} style={{width:"400px"}}></input>
          </div>
          <div>
            <input type="text" name="posterURL" placeholder="posterURL" ref={posterURL} style={{width:"400px"}}></input>
          </div>
          <div>
            <input type="text" name="trailerURL" placeholder="trailerURL" ref={trailerURL} style={{width:"400px"}}></input>
          </div>
          <div>
            <input type="text" name="rating" placeholder="rating" ref={rating} style={{width:"400px"}}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Add Movie
            </Button>
        </Modal.Footer>
        </Modal>
      </>
    );
}
export default AddMovie;