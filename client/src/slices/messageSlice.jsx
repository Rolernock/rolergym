import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState = {
  messages: []
}

export const sendMessage = createAsyncThunk(
  '/messages/sendMessage',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/contact', formData)
      toast.success(data.msg)
      return data
    } catch (err) {
      const errors = err.response.data.errors
      return rejectWithValue(errors)
    }
  }
)

export const readMessages = createAsyncThunk(
  '/messages/readMessages',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/contact')
      return data
    } catch (err) {
      const errors = err.response.data.errors
      return rejectWithValue(errors)
    }
  }
)

export const deleteMessage = createAsyncThunk(
  '/messages/deleteMessages',
  async (msgId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/contact/${msgId}`)
      return toast.success(data.msg)
    } catch (err) {
      const errors = err.response.data.errors
      return rejectWithValue(errors)
    }
  }
)

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: builder => {
    builder.addCase(readMessages.fulfilled, (state, action) => {
      state.messages = action.payload
    })
  }
})

export default messageSlice.reducer
