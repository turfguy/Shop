import './App.css';
import { Button,Navbar,Nav,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { useState } from 'react';
import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js'

function App() {
  let [belt] = useState(data);
  let navigate= useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Link to="/"> 
        <Navbar.Brand href="/">BeltShop</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

          <Routes>  
          <Route path="/detail/:id" element={
                            <Detail belt={belt}/> 
          } />
          <Route path="/" element={
          <div>
              <div className="main-bg">
                  </div>
                <br></br>
              <h4>BEST ITEMS</h4>
                <Container>
                <Row href="/detail">
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
          <Route path="*" element={<div>
            <h4 >
              없는 페이지입니다..
            </h4> 
          </div>}/>
           <Route path="/about" element={<About/>}>
             <Route path="member" element={<div><h4>나 혼자~</h4></div>}/>
           </Route>
           <Route path="/event" element={<Event/>}>
              <Route path="one" element={<h4>생일기념 쿠폰 증정!</h4>}/>
              <Route path="two" element={<h4>리뷰 작성 시, 포인트 2배 적립</h4>}/>
           </Route>
      </Routes> 
      
     
    
    </div>
    
  );
}

function Event()
{
  return(
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet/>
    </div>
  )
}

function About (){
  return(
    <div>
      <h4>벨트를 사러 오는 곳</h4>
        <Outlet></Outlet>
    </div>
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
