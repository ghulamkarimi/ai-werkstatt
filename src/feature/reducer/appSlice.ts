import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppState {
  toggleSidebarMenu: boolean;
  isPanelOpen: boolean;

}

const initialState: IAppState = {
  toggleSidebarMenu: false,
  isPanelOpen: false,

};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToggleSidebarMenu: (state, action: PayloadAction<boolean>) => {
      state.toggleSidebarMenu = action.payload;
    },
    setIsPanelOpen: (state, action: PayloadAction<boolean>) => {
      state.isPanelOpen = action.payload;
    },

  },
});

export const {
  setToggleSidebarMenu,
  setIsPanelOpen,
} = appSlice.actions;

export default appSlice.reducer;
