import { IAiChat } from "@/interface";
import { getChatAi } from "@/services/chatAi";
import { createAsyncThunk, createEntityAdapter, createSlice, EntityState, PayloadAction } from "@reduxjs/toolkit";
import { SizeLimit } from "next";

interface IChatState {
    status:"idle"| "completed"|"rejected"
    error:string | null
  isChatAiOpen: boolean;

}



const chatAdapter = createEntityAdapter<IAiChat,string>({
    selectId:(chat)=>chat._id
})
const initialState: IChatState & EntityState <IAiChat,string> = chatAdapter.getInitialState({
    status:"idle",
    error:"",
    isChatAiOpen: false,
});
export const getApiAiChat = createAsyncThunk("/chatAi/getApiAiChat",async()=>{
    try {
        const response = await getChatAi()
        console.log("responseChatAi",response.data)
        return response.data
    } catch (error:any) {
        throw new Error(error)
    }
})
const chatAiSlice = createSlice({
  name: "chatAi",
  initialState,
  reducers: {

    setIsChatAiOpen: (state, action: PayloadAction<boolean>) => {
      state.isChatAiOpen = action.payload;
    },

  },
  extraReducers:(builder)=>{
    builder
          .addCase(getApiAiChat.fulfilled, (state, action) => {
                chatAdapter.setAll(state, action.payload);
                state.status = "completed";
              })
              .addCase(getApiAiChat.pending, (state) => {
                state.status = "idle";
              })
              .addCase(getApiAiChat.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message || "Fehler beim Laden der chatAi";
              });
  }
});

export const {
    setIsChatAiOpen
} = chatAiSlice.actions;

export default chatAiSlice.reducer;
