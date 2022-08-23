// import logo from './logo.svg';
// import './App.css';
import './App_new.css';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import multiple from './External_functions/function1';


// Initialize some variables and Constants....
let pics = []; // A variable for an array of pic IDs to be shown in Modal



// Modal Section Start......
function MyModal(props){
  return (
    <Modal {...props} centered scrollable='true' size='lg' restoreFocus={true} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton className='modal-header' >
        {/* <Modal.Title id="contained-modal-title-vcenter" >
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body  >
        {/* {Array.from(props.numbs).map((_, index) => (
          <h1>{_}</h1>
        ))} */}
        <Container>
          <Row>
            {props.numbs.map((item) => (
              <Col sm='6' md='4' lg='4'>
                <Card border='light' >
                  <Card.Img  variant='top' src={'Pictures/New/' + item + '.png'} />
                  <Card.Img variant='top' />
                </Card>
                <h1> I hate y'all </h1>
              </Col>
            ))}
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
// Modal Section End....




function App() {
  const gameName = ['Call of Duty', 'Mortal Combat', 'FIFA', 'Just Cause', 'Apex Legend'];
  // let pics = []; // A variable for an array of pic IDs to be shown in Modal
  
  
  // Start by creating state for the Modal....
  const [showModal, setShowModal] = useState(false); // For opening & closing the Modal
  // const [id, setID] = useState([]); // For the IDs that will be past to te Modal
  

  return (
    <div className="App">
      <Container className='Container'> {/*Remember to inline style the container (Top & Buttom margin)*/}
        {/* <Row xs={1} md={2} className="g-4">  */}
        {/* <Row style={{textAlign: "center"}}> */}
          <Row className='justify-content-md-center text-center Row1' style={{textAlign: "center"}}> {/*Inline style Row (Height, Top/bottom Margin, Padding{Where necessary})*/}
            <Col md='auto' >
              <h1><strong> [ </strong> Pick your Game <strong> ] </strong></h1> {/*Inline style the font*/}
            </Col>
          </Row>
          <Row className="g-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Col sm='6' md='4' lg='4'>
                <Card border='light' className='Card'>
                {console.log(idx)} 
                  <Card.Img variant="top" src={"Pictures/logo" + ++idx + ".png"} className='CardImage' /> {/*Inline Style tis for Min & Max Height*/}
                  <Card.Body>
                      
                    <Card.Footer id={idx} 
                      className="text-muted text-center text-sm-center CardFooter" 
                      onClick={() => {
                        setShowModal(true); 
                        console.log("This is " + ++idx); 
                        pics = multiple(idx); // Pics variable assigned a value..
                        // console.log("These are them. " + pics);
                    }} >{gameName[--idx]}</Card.Footer> {/*Use text-center intead of text-sm-center*/}
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
          </Row>
      </Container>
      <MyModal numbs={pics} show={showModal} onHide={() => setShowModal(false)} />; 
      {console.log(pics)}
    </div>
  );
}

export default App;
