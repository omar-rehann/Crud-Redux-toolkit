import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// start getposts
export const getposts=createAsyncThunk(
    "posts/getposts",
    async (_,thunkAPI)=>{
        try{
            const res =await fetch("http://localhost:30001/posts");
            const data= await res.json();
            return data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }

})

// delete posts
export const deleteposts = createAsyncThunk(
  "posts/deleteposts",
  async (id, thunkapi) => {
    try {
      await fetch(`http://localhost:30001/posts/${id}`, {
        method: "DELETE"
      });
      return id;

    } catch (error) {
      return thunkapi.rejectWithValue(error.message);
    }
  }
);
// insertdata 
export const insertposts=createAsyncThunk("posts/insertposts",async (insertpost,thunkapi)=>{
   try {
  const result = await fetch("http://localhost:30001/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(insertpost)
  });
  const data = await result.json();
  return data;
} catch(error){
        return thunkapi.rejectWithValue(error.message);
    }
})

const initialState={posts:[],isloading:false,error:null}
const  post=createSlice({
    name:"posts",
    initialState:initialState,
    
  extraReducers: (builder) => {
    // start getposts
    builder
      .addCase(getposts.pending, (state,action) => {
        state.isloading = true;
        console.log(action);
      })
      .addCase(getposts.fulfilled, (state, action) => {
        state.isloading = false;
        state.posts = action.payload;
        console.log(action);

      }).addCase(getposts.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
        console.log(action);

      }).addCase(deleteposts.pending, (state, action) => {
          state.isloading = true;
        console.log(action);

      }).addCase(deleteposts.fulfilled, (state, action) => {
        state.isloading = false;
        state.posts = state.posts.filter((e)=>  e.id !== action.payload);
        console.log(action);

      }).addCase(deleteposts.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
        console.log(action);
      }).addCase(insertposts.pending, (state, action) => {
          state.isloading = true;
        console.log(action);

      }).addCase(insertposts.fulfilled, (state, action) => {
        state.isloading = false;
        state.posts.push(action.payload)
        console.log(action);
      }).addCase(insertposts.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
        console.log(action);
      })
  },    
})
export default post.reducer;