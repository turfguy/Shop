/* eslint-disable */
import './App.css';
import { Button,Navbar,Nav,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { useState } from 'react';
import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js'
import axios from 'axios';

function App() {
  let [belt,setBelt] = useState(data);
  let navigate= useNavigate();
  let [time,setTime] = useState(0);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Link to="/"> 
        <Navbar.Brand href="/">잡상인닷컴</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail/:id">Detail</Nav.Link>
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
                <Row >
                {
                    belt.map(function(a,i){
                      return(
                            <ItemList 
                              belt={belt[i]} i={i+1} / >
                      )
                        })
                  }
                </Row>
                <br></br><br></br>
                <button onClick={()=>{
                  if(time == 0)
                   { 
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                      .then((결과)=>{
                        let copy = [...belt, ...결과.data];
                        setBelt(copy);
                        setTime(1);
                        console.log(time);
                         })
                      .catch(()=>{
                        console.log('failed!');
                      })
                    }
                  else if( time == 1  )
                    {
                     axios.get('https://codingapple1.github.io/shop/data3.json')
                      .then((결과)=>{
                          let copy = [...belt, ...결과.data];
                          setBelt(copy);
                          console.log(belt.data);
                          setTime(2);
                          console.log(time);
                       })
                      .catch(()=>{
                        console.log('failed!');
                      })
                    }
                  else
                  {
                    window.alert("더이상 상품이 없습니다!");
                  }
                

                    
                }}>더보기</button>
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
function notShow(props)
{
  <>
  <alert>"더 이상 상품이 없습니다!"</alert>
  </>
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
      <Link to={"/detail/"+props.belt.id}> 
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.belt.title}</h4>
      <p>{props.belt.content}</p>
      <p>{props.belt.price}</p>
      </Link>
      </Col>

    </>
    )

}


export default App;
