import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../reducer/appSlice"
import contentReducer, { getALLContentApi } from "../reducer/contentSlice"
import contactReducer from "@/feature/reducer/contactSlice"; 
import blogPostReducer, { getBlogApi } from "@/feature/reducer/blogPostslice"; 





export const store = configureStore({
   reducer:{
    app:appReducer,
    content:contentReducer,
    contact: contactReducer,
    blogPost: blogPostReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),

})


store.dispatch(getALLContentApi())
store.dispatch(getBlogApi())
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;