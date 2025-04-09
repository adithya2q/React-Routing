import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState: {
        value:[],
    },
    reducers :{
        clearCart:state=>{
            state.value=[];
        },
        addProduct: (state, action) => {
            const { id, ProductName, price, Category, Image } = action.payload;
      
            const existingProduct = state.value.find(
              (product) => product.id === id
            );
      
            if (existingProduct) {
              window.alert(`${ProductName} quantity has already been added.`);
            } else {
              state.value.push({
                id,
                ProductName,
                price,
                Category,
                Image,
                quantity: 1,
              });
              window.alert(`${ProductName} has been added to the cart.`);
            }
          },
          removeProduct: (state, action) => {
            const id = action.payload;
            state.value = state.value.filter((product) => product.id !== id); // Filter out the product by id
          },
    }
})

export const {clearCart,addProduct,removeProduct} = cartSlice.actions;

export default cartSlice.reducer;