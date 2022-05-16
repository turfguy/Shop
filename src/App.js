import './App.css';
import { Button,Navbar,Nav,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { useState } from 'react';
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  let [belt] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Link to="/"> 
        <Navbar.Brand href="#home">BeltShop</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

          <Routes>  
          <Route path="/detail" element={<div>
            <Detail  url={'item0.jpeg'} title={belt[0].title} brand={belt[0].brand} price={belt[0].price}/>   
            </div>}/>
          <Route path="/" element={
          <div>
              <div className="main-bg">
                  </div>
                <br></br>
              <h4>BEST ITEMS</h4>
                <Container>
                <Row>
                {
                    data.map(function(a,i){
                      return(
                            <ItemList  url={'item'+i+'.jpeg'} title={belt[i].title} brand={belt[i].brand} price={belt[i].price}/> 
                      )
                        })
                  }
                </Row>
                </Container>
           </div>
          }/>
      </Routes> 
      
     
    
    </div>
    
  );
}

function Detail (props)
{
  return(
        <>
            <div className="container"> 
                <div className="row">
                  <div className="col-md-6">
                    <img src={props.url} width="100%" />
                  </div>
                  <div className="col-md-6">
                    <h4 className="pt-5">{props.title}</h4>
                    <p>{props.brand}</p>
                    <p>{props.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                  </div>
                  </div>
                  
            </div>
      </> 
  )
}
function ItemList (props)
{
  return (
    <>
      <Col sm>
      <Link to="/detail">
      <img className="item" src={props.url}/>
      <h4>{props.title}</h4>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      </Link>
      </Col>

    </>
    )

}


export default App;
