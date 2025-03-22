import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../reducer/appSlice"
import contentReducer, { getALLContentApi } from "../reducer/contentSlice"
import contactReducer from "@/feature/reducer/contactSlice"; 




export const store = configureStore({
   reducer:{
    app:appReducer,
    content:contentReducer,
    contact: contactReducer, 
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),

})


store.dispatch(getALLContentApi())

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;