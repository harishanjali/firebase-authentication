import { createSlice } from '@reduxjs/toolkit'
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";

let specialCase=false;
const initialState = {
  numOfCakes: 20,
  data:specialCase
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    },
    updateLoginStatus:(state,action)=>{
        state.data = action.payload
    }
  }
})

export default cakeSlice.reducer
export const { ordered, restocked,updateLoginStatus } = cakeSlice.actions