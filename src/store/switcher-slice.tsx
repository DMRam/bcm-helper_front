import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../components/interfaces/Interfaces";
import { RootState } from "./index";

// Define a type for the slice state
interface ToggleState {
  isVisible: boolean;
  initialData: UserInterface[]
}

const iniData: UserInterface[] = [
  {
    name: "",
    lastName:"",
    city:"",
    email: "",
    id: ''
  }
]

// Define the initial state using that type
const initialState: ToggleState = {
  isVisible: false,
  initialData: iniData
};

const sliceMenu = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleFunction(state) {
      state.isVisible = !state.isVisible;
    },
    // This is to add values (List) from axios -> API -> Mongo as an initial state
    addValuesFunction(state, action) {
      state.initialData = action.payload

    }
  },
});

export const { toggleFunction, addValuesFunction } =
  sliceMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceMenu.reducer;
