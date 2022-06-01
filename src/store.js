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
        {id : 2, name : 'Grey Yordan', count : 1}
      ] 
})

export default configureStore({
  reducer:{
        user : user.reducer,
        stock : stock.reducer,
        cartData : cartData.reducer
   }
}) 