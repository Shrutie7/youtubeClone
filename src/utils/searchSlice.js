

import { createSlice } from "@reduxjs/toolkit";
// keeping empty object as initial state 

// in this slice if user has searched something api calls are made with debouncing but when user is erasing in search , it will get cached,API CALLS WONT BE MADE 

// it will store the searchresults of api call into my reduxstore here and every time when we are trying to search for same keyword once again it should not make an api call for same 




const searchSlice = createSlice({
    name:"search",
    initialState: {
        
    },
    reducers:{
        cacheResults:(state,action)=>{
// we send object in query 
//{"ip":["iphone","iphone13"]}



// merge 2 objects using Object.assign(target,source1,source2)
// state = Object.assign(state,action.payload)

return {
    ...state,...action.payload,
}



// state = {...state,...action.payload};
// merge the action.payload and the state we can mutate the state using spread operator
        }
    }

})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;