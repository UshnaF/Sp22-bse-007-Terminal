import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        selectedCategory: null,
    },
    reducers: {
        setCategories: (state, action) => {
            state.list = action.payload;
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setCategories, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;


// export const fetchCategories = async () => {
//     const response = await fetch("https://emojihub.yurace.pro/api/all")
//     const data = await response.json();
//     return data;
// };

// export const fetchCategoryDetails = async (category) => {
//     const response = await fetch("https://emojihub.yurace.pro/api/category");
//     const data = await response.json();
//     return data;
// };
