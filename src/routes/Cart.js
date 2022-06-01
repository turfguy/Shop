import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart(){

let cartData = useSelector((state)=>{ return state.cartData })

return(
    <div>
        <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
  
    {
                    cartData.map(function(a,i){
                      return(
                      
                            <>
                              <tr>
                            <td>{cartData[i].id}</td>
                              <td>{cartData[i].name}</td>
                              <td>{cartData[i].count}</td>
                              <td>
                                  <button>
                                      삭제하기 
                                  </button>
                              </td>
                              </tr>
                            </>
                            )
                      
                        })
                  }

  </tbody>
</Table> 
    </div>
)
}


export default Cart