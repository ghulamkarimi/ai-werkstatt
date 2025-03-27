import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../reducer/appSlice"
import contentReducer, { getALLContentApi } from "../reducer/contentSlice"
import contactReducer from "@/feature/reducer/contactSlice"; 
import blogPostReducer, { getBlogApi } from "@/feature/reducer/blogPostslice"; 
import chatAiReducer, { getApiAiChat } from "@/feature/reducer/chatAiSlice"; 






export const store = configureStore({
   reducer:{
    app:appReducer,
    content:contentReducer,
    contact: contactReducer,
    blogPost: blogPostReducer,
    chatAi:chatAiReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),

})


store.dispatch(getALLContentApi())
store.dispatch(getBlogApi())
store.dispatch(getApiAiChat())
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;