/* eslint-disable */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button,Navbar,Nav,Container,Row,Col } from 'react-bootstrap';
import {Context1} from './../App.js';
import { addCart } from "../store.js";
import {useDispatch} from 'react-redux'; 


function Detail (props)
{
  useEffect(()=>{
    let watchList = localStorage.getItem('watched')
    watchList = JSON.parse(watchList)
    watchList.push(belt.id)
    watchList = new Set(watchList)
    watchList = Array.from(watchList)
    
    localStorage.setItem('watched',JSON.stringify( watchList ))
  },[]  );
  
  let 재고 =  useContext(Context1);
  let dispatch = useDispatch();
  let [fade,setFade] = useState('');
  let [alert,setAlert] = useState(0);
  useEffect(()=>{
    let a =  setTimeout(()=>{  setAlert(alert=1)
      },2000);
    return ()=>
    {
      clearTimeout(a);
    }

  });
  useEffect(()=>{ setTimeout(()=>{setFade('end')},100)
      return (()=>{
          setFade('')
      })

    }
  ,[])


  let [count,setCount] = useState(0);
  let {id} = useParams();
  let [tab,setTab] = useState(0);
  let belt = props.belt.find(function(x){
    return x.id == id
  });
  return(
        <div >
            <div className={"container start "+ fade}>
                  {
                    alert == 0 ? 
                    <>
                    <br></br>
                    <div className="alert alert-warning">
                        2초 이내 구매시 할인!!  
                    </div>
                    </>              : null
                  }              
                <div className="row">
                  
                  <div className="col-md-6">
                  <img  src={"https://codingapple1.github.io/shop/shoes"+(props.belt[id].id+1)+".jpg"} width="100%" />
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.belt[id].title}</h4>
                    <p>{props.belt[id].content}</p>
                    <p>{props.belt[id].price}</p>
                    <button onClick={()=>{
                        
                        dispatch(addCart(
                          {id:id, name: belt.title , count: '1'}
                        ))
                    }}className="btn btn-danger">주문하기</button> 
                  </div>
                  
                  </div>
                  <Nav variant="tabs"  defaultActiveKey="link0">
                      <Nav.Item>
                        <Nav.Link onClick={()=>{setTab(0);}}eventKey="link0">버튼0</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link onClick={()=>{setTab(1);}} eventKey="link1">버튼1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link onClick={()=>{setTab(2);}} eventKey="link2">버튼2</Nav.Link>
                      </Nav.Item>
                  </Nav> 
                  <TabContents  belt={props.belt} tab={tab}/>
               
            </div>
      </div> 
  )
  }
  function TabContents(props){
    let [eff,setEff] = useState('')
    useEffect(()=>{
        setTimeout(()=>{setEff('end')},200)
        return()=>
        {
          setEff('')
        }
    },[props.tab])  
    
    return(
        (
          <div className={'start '+ eff} >
            {
              <div>
                {props.belt[0].title}
                
                
              </div>
            }
          </div>)
      )
  }
    
export default Detail;