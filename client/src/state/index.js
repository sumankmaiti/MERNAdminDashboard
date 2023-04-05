import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: 'light',
	userId: '63701cc1f03239b7f700000e'
}

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setMode: (state) => {
			state.mode = state.mode === 'light' ? 'dark' : 'light';
		}
	}
})

// const { actions, reducer } = globalSlice

export const { setMode } = globalSlice.actions
export default globalSlice.reducer


