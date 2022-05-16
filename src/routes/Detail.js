function Detail ()
{
  return(
        <>
            <div className="container"> 
                <div className="row">
                  <div className="col-md-6">
                    <img src={'./img/item1.jpeg'} width="100%" />
                  </div>
                  <div className="col-md-6">
                    <h4 className="pt-5">품명</h4>
                    <p>브랜드</p>
                    <p>가격</p>
                    <button className="btn btn-danger">주문하기</button> 
                  </div>
                  </div>
                  
            </div>
      </> 
  )
}

export default Detail;