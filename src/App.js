import './App.css';
import { Button,Navbar,Nav,Container,Row,Col } from 'react-bootstrap';
import item1 from './img/item1.jpeg';
import item2 from './img/item2.jpeg';
import item3 from './img/item3.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">라멘</Navbar.Brand>
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
            <div className='item' style={{ backgroundImage: 'url('+ item1 +')'}}></div>
            <h4>Lifting Belt</h4>
            <p>Chriology</p>
          </Col>
          <Col sm>
          <div className='item' style={{ backgroundImage: 'url('+ item2 +')'}}></div>
          <h4>Leather Weight Belt</h4>
            <p>CardilloUSA</p>
          </Col>
          <Col sm>
            <div className='item' style={{ backgroundImage: 'url('+ item3 +')'}}></div>
            <h4>Custom Weight Belt</h4>
            <p>CardilloUSA</p>
          </Col>
        </Row>
    </Container>
    </div>
    
  );
}

export default App;
