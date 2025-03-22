import { IContactFormData, TContactFormData } from "@/interface";
import { sendFormData } from "@/services/contact";
import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

interface IContactFormState{
    status: "pending" | "accepted" | "rejected";
    error: string | null;
}

const contactFormAdapter = createEntityAdapter<IContactFormData,string>({
    selectId:(contact)=>contact.email
})

const initialState:IContactFormState & EntityState<IContactFormData,string> = contactFormAdapter.getInitialState({
    status: "pending",
    error: null,
  });

  export const submitContactForm = createAsyncThunk(
    "contact/submitContactForm",
    async (contactForm: TContactFormData, { rejectWithValue }) => {
      try {
        const response = await sendFormData(contactForm); 
        return response.data; 
      } catch (error: any) {
        return rejectWithValue(error.response.data); 
      }
    }
  );

  const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(submitContactForm.pending, (state) => {
          state.status = "pending";
        })
        .addCase(submitContactForm.fulfilled, (state, action) => {
          state.status = "accepted";
          contactFormAdapter.setOne(state, action.payload); 
          state.error = null;
        })
        .addCase(submitContactForm.rejected, (state, action) => {
          state.status = "rejected";
          state.error = action.payload as string;
        });
    },
  });


  export default contactSlice.reducer;
