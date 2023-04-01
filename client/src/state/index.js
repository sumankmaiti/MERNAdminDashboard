import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: 'dark'
}
const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducer: {
		setMode: (state) => {
			state.mode = state.mode === 'light' ? 'dark' : 'light';
		}
	}
})

// const { actions, reducer } = globalSlice

export const { setMode } = globalSlice.actions
export default globalSlice.reducer


