import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice
({
    name : 'user',
    initialState : 'Jacob'
})

let stock = createSlice 
({
    name : 'stock',
    initialState :[
        10,11,12
    ]
})

let cartData = createSlice 
({
     name : 'cartData',
     initialState :[
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1},
      ] ,
      reducers : {
        changeCount(state,action){
          state[action.payload].count += 1
        },
        changeCount2(state,action){
            state[action.payload].count -= 1
          },
        addCart(state,action)
         {
            state.push(action.payload)
         }
      }
})

export default configureStore({
  reducer:{
        user : user.reducer,
        stock : stock.reducer,
        cartData : cartData.reducer
   }
}) 

export let {changeCount,changeCount2,addCart} = cartData.actions