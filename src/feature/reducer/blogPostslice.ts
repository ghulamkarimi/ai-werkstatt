import { IBlogPost } from "@/interface"
import { getBlog } from "@/services/blogPost"
import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface IBlogPostState{
    status:"idle"| "completed"|"rejected"
    error:string | null
}


const blogPostAdapter = createEntityAdapter<IBlogPost,string>({
    selectId:(blogPost)=>blogPost._id
})

const initialState:IBlogPostState & EntityState <IBlogPost,string>=blogPostAdapter.getInitialState({
    status:"idle",
    error:null
})



export const getBlogApi = createAsyncThunk("/blog/getBlogApi",async()=>{
    try {
        const response = await getBlog()
        return response.data.blogPosts
    } catch (error:any) {
        throw new error
    }
})


const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBlogApi.fulfilled, (state, action) => {
            blogPostAdapter.setAll(state, action.payload);
            state.status = "completed";
          })
          .addCase(getBlogApi.pending, (state) => {
            state.status = "idle";
          })
          .addCase(getBlogApi.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message || "Fehler beim Laden der Blogposts";
          });
    }
})


export const { selectAll: displayBlogs, selectById: displayBlog } = blogPostAdapter.getSelectors(
    (state: RootState) => state.blogPost
  );
  

export default blogSlice.reducer