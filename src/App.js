// import logo from './logo.svg';
// import './App.css';
import './App_new.css';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import multiple from './External_functions/function1';


// Initialize some variables and Constants....
let picsNumberList = []; // A variable for an array of pic IDs to be shown in Modal
var gameNames = [];
var gameVersion = [];



// Modal Section Start......
function MyModal(props){
  return (
    <Modal {...props} centered scrollable='true' size='lg' restoreFocus={true} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton className='modal-header' >
        {/* <Modal.Title id="contained-modal-title-vcenter" >
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body  > {/*Start... Try to change the Modal header & body backgroung colour*/}
        {/* {Array.from(props.numbs).map((_, index) => (
          <h1>{_}</h1>
        ))} */}
        <Container>
          <Row className="g-5"> {/*The gutter/gap was just included |This is where I stoped|*/}
            {props.numbs.map((item, index) => (
              <Col sm='6' md='4' lg='4' key={index}> {/* Remember to add a Key*/}
                <Card border='light' >
                  <Card.Img  variant='top' src={'Pictures/New/' + item + '.png'} />
                  
                  <Card.Body>
                    <Card.Footer className='text-center' >{gameVersion[index]}</Card.Footer>
                  </Card.Body>
                </Card>
                {/* <h1> I hate y'all </h1> */}
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
  // const gameName = ['Call of Duty', 'Mortal Combat', 'FIFA', 'Just Cause', 'Apex Legend'];
  
  
  
  // Start by creating state for the Modal....
  const [showModal, setShowModal] = useState(false); // For opening & closing the Modal
  // State for the fetched REST API data.....
  const [value, setValue] = useState([]); // For the IDs that will be past to te Modal


  useEffect(() =>{
    fetch("https://projects.erlimited.com.ng/gamelist.php", {method:"GET"})
    .then((res) => res.json())
    .then((data) => {
      console.log("This is the returned Data >>>>", data);
      const requestedData = data;
      setValue(requestedData);
      console.log(value);
      // console.log(requestedData);

      // Loop through the result to bring out all unique game names.....
      requestedData.map((item) => {
        // Search for game names and slice the names from the resultant string
        if (gameNames.includes(item.name.slice(0, item.name.search(/\d/) - 2))){ // Check if the sliced name is in the gamenames list
          ; // If its there, do nothing
        }else{
          gameNames.push(item.name.slice(0, item.name.search(/\d/) - 2))
        }
        // Get out the year(version) of the game...
        if (gameVersion.includes(parseInt(item.version))){
          ; // Do nothing
        }else{
          gameVersion.push(parseInt(item.version));
        }

        return '';
        
      })
      console.log(gameNames);
      console.log(gameVersion);
    })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <div className="App">
      <Container className='Container'> {/*Remember to inline style the container (Top & Buttom margin)*/}
        {/* <Row xs={1} md={2} className="g-4">  */}
        {/* <Row style={{textAlign: "center"}}> */}
          <Row className='justify-content-md-center text-center Row1' style={{textAlign: "center"}}> {/*Inline style Row (Height, Top/bottom Margin, Padding{Where necessary})*/}
            <Col md='auto' >
              <h1><strong> [ </strong> Pick your Game!. <strong> ] </strong></h1> {/*Inline style the font*/}
            </Col>
          </Row>
          <Row className="g-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Col sm='6' md='4' lg='4' key={idx} > {/* Remember should always have a Key*/}
                <Card border='light' className='Card'  >
                {console.log(idx)} 
                  <Card.Img variant="top" src={"Pictures/logo" + ++idx + ".png"} className='CardImage' /> {/*Inline Style tis for Min & Max Height*/}
                  <Card.Body>
                      
                    <Card.Footer id={idx} 
                      className="text-muted text-center text-sm-center CardFooter" 
                      onClick={() => {
                        setShowModal(true); 
                        console.log("This is " + ++idx); 
                        picsNumberList = multiple(idx); // Pics variable assigned a value..
                        // console.log("These are them. " + pics);
                    }} >{gameNames[--idx]}</Card.Footer> {/*Use text-center intead of text-sm-center*/}
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
          </Row>
      </Container>
      <MyModal numbs={picsNumberList} show={showModal} onHide={() => setShowModal(false)} />; 
      {console.log(picsNumberList)}
    </div>
  );
}

export default App;
