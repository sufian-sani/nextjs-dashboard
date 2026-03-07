import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type POSState = {
  sidebarOpen: boolean;
  count: number;
  count2: number;
  sidebarOpen2: boolean;
};

const initialState: POSState = {
  sidebarOpen: false,
  count: 0,
  count2: 0,
  sidebarOpen2: false,
};

const posSlice = createSlice({
  name: "pos",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.sidebarOpen = action.payload;
    },
    incrementCount(state) {
      state.count += 1;
    },
    resetCount(state) {
      state.count = 0;
    },
    incrementCount2(state) {
      state.count2 += 1;
    },
    resetCount2(state) {
      state.count2 = 0;
    },
    toggleSidebar2(state) {
      state.sidebarOpen2 = !state.sidebarOpen2;
    },
    setSidebarOpen2(state, action: PayloadAction<boolean>) {
      state.sidebarOpen2 = action.payload;
    }
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  incrementCount,
  resetCount,
  incrementCount2,
  resetCount2,
  toggleSidebar2,
  setSidebarOpen2
} = posSlice.actions;

export default posSlice.reducer;
