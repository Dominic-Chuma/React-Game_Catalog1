// import logo from './logo.svg';
// import './App.css';
import './App_new.css';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function App() {
  const gameName = ['Call of Duty', 'Mortal Combat', 'FIFA', 'Just Cause', 'Apex Legend'];
  
  
  // Start by creating state for the Modal....

  // Modal Section Start......

  // Modal Section End....

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
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
                      {/* <Card.Title>Card title !</Card.Title> */}
                      {/* <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text> */}
                    <Card.Footer className="text-muted text-center text-sm-center CardFooter">{gameName[--idx]}</Card.Footer> {/*Use text-center intead of text-sm-center*/}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
      </Container>
    </div>
  );
}

export default App;
