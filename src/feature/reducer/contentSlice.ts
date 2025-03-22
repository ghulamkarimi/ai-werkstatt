import { IContent, TContent } from "@/interface";
import { createContent, getAllContent } from "@/services/content";
import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface IContentState {
    status: "pending" | "accepted" | "rejected";
    error: string | null;

}


const contentAdapter = createEntityAdapter<IContent,string>({
    selectId:(content)=>content._id
})

const initialState :IContentState & EntityState<IContent,string>= contentAdapter.getInitialState({
    status: "pending",
    error: "",
})


export const createContentApi = createAsyncThunk("/content/createContentApi", async (content: TContent, { rejectWithValue }) => {
    try {
      const response = await createContent(content);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
})

export const getALLContentApi = createAsyncThunk("/content/createContentApi",async()=>{
    try {
        const response = await getAllContent()
        console.log("API Response:", response.data);

        return response.data
    } catch (error:any) {
        throw new error
    }
})

  



const contentSlice = createSlice({
    name:"content",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(createContentApi.pending,(state)=>{
        state.status = "pending"
    })
    .addCase(createContentApi.fulfilled, (state, action) => {
        state.status = "accepted";

        // Normalisiere die Daten, falls sie verschachtelt sind
        const normalizedContent = Array.isArray(action.payload) ? action.payload.flat() : [action.payload];

        // Füge das normalisierte Dokument zum State hinzu
        contentAdapter.setOne(state, normalizedContent[0]);
      })
    .addCase(createContentApi.rejected,(state,action)=>{
        state.status = "rejected"
        state.error = action.error.message || "An Error Occurred";
    })
    }
})


export const { selectAll:displayContents,selectById:displayContent} = contentAdapter.getSelectors((state:RootState)=>state.content)


export default contentSlice.reducer;
