import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    searchValue:''
}
const movieSlice= createSlice({
    name: 'movies',
    initialState,
    reducers:{
        setMovies : (state,action)=>{
            state.movies= action.payload;
        },
        setsearchValue: (state, action)=>{
            state.searchValue= action.payload
        }
    }

});

export const {setMovies,setsearchValue}= movieSlice.actions;

export default movieSlice.reducer;