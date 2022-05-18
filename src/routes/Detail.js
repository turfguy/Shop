import { useParams } from "react-router-dom";

function Detail (props)
{
  let {id} = useParams();

  return(
        <>
            <div className="container"> 
                <div className="row">
                  <div className="col-md-6">
                    <img src={'/Users/kimseungmin/Downloads/shop/shop/public/item0.jpeg'} width="100%" />
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.belt[id].title}</h4>
                    <p>{props.belt[id].brand}</p>
                    <p>{props.belt[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                  </div>
                  </div>
                  
            </div>
      </> 
  )
}

export default Detail;