import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Slices/categorySlice'
const store = configureStore({
    reducer: {
        categories: categoriesReducer,

    },
});

export default store;
