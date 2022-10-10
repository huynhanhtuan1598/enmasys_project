import { configureStore } from '@reduxjs/toolkit'
import {hobbyReducer} from "./Reducers/hobby";
import { userReducer } from './Reducers/user';

const store = configureStore({
    reducer: {
        hobby: hobbyReducer,
        user: userReducer,
    }
})

export default store;