import './App.css';
import { Button,Navbar,Nav,Container,Row,Col } from 'react-bootstrap';
import item1 from './img/item1.jpeg';
import item2 from './img/item2.jpeg';
import item3 from './img/item3.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { useState } from 'react';

function App() {
  let [belt] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">민지홍똥꼬멍</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="main-bg">
      </div>
      <br></br>
      <h4>BEST ITEMS</h4>
   
            <Container>
                <Row>
                <Col sm>
                  <ItemList  title={belt[0].title} brand={belt[0].brand} price={belt[0].price}/> 
                </Col>
                <Col sm>
                <div className='item' style={{ backgroundImage: 'url('+ item2 +')'}}></div>
                  <h4>{belt[1].title}</h4>
                  <p>{belt[1].brand}</p>
                  <p>{belt[1].price}</p>
                </Col>
                <Col sm>
                  <div className='item' style={{ backgroundImage: 'url('+ item3 +')'}}></div>
                  <h4>{belt[2].title}</h4>
                  <p>{belt[2].brand}</p>
                  <p>{belt[2].price}</p>
                </Col>
              </Row>
          </Container>
        
    
    </div>
    
  );
}

function ItemList (props)
{
  return (
    <>
      <div className='item' style={{ backgroundImage: 'url('+ item1 +')'}}> </div>
      <h4>{props.title}</h4>
      <p>{props.brand}</p>
      <p>{props.price}</p>
    </>
    )

}


export default App;
