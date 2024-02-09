import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
    mode:'light',
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
          },
          setMode(state,action){
             state.mode = action.payload;
          }

    },
});

export const {setUser, setLoading,setMode} = profileSlice.actions;
export default profileSlice.reducer;