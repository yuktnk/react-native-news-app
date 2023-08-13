import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  clips: [],
}

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addClip: (state, action) => {
      state.clips.push(action.payload)
    },
    deleteClip: (state, action) => {
      const filteredClips = state.clips.filter((clip) => clip.url !== action.payload.url)
      state.clips = filteredClips
    },
  },
})

export const { addClip, deleteClip } = userSlice.actions

export default userSlice.reducer
