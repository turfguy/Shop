import { useParams } from "react-router-dom";
import styled from "styled-components";


function Detail (props)
{
  let {id} = useParams();
  let belt = props.belt.find(function(x){
    return x.id == id
  });
  return(
        <>
            <div className="container"> 
                <div className="row">
                  <div className="col-md-6">
                  <img src={"https://codingapple1.github.io/shop/shoes2.jpg"} width="100%" />
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{belt.title}</h4>
                    <p>{belt.brand}</p>
                    <p>{belt.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                  </div>
                  </div>
                  
            </div>
      </> 
  )
}

export default Detail;