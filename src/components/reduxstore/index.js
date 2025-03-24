import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';




const reduxStore= configureStore({
    reducer:{
        counter:counterReducer,
    },
    devTools: true



});

export default reduxStore;