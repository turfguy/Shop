import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


function Detail (props)
{
  let [alert,setAlert] = useState(0);
  useEffect(()=>{

    let a =  setTimeout(()=>{
      setAlert(alert=1)
    },2000)
    return ()=>
    {
      clearTimeout(a);
    }

  });


  let [count,setCount] = useState(0);
  let {id} = useParams();
  let belt = props.belt.find(function(x){
    return x.id == id
  });
  return(
        <>
            <div className="container">
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
                  <img src={"https://codingapple1.github.io/shop/shoes"+(props.belt[id].id+1)+".jpg"} width="100%" />
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.belt[id].title}</h4>
                    <p>{props.belt[id].content}</p>
                    <p>{props.belt[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                  </div>
                  </div>
                  
            </div>
      </> 
  )
}

export default Detail;