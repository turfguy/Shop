import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {changeCount,changeCount2} from './../store.js'
function Cart(){
let dispatch = useDispatch()
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
                                  <button onClick= {()=>{
                                      dispatch((changeCount(cartData[i].id)))
                                  }}>
                                       +
                                  </button>
                                  <button onClick= {()=>{
                                      dispatch((changeCount2(cartData[i].id)))
                                  }}>
                                       -
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