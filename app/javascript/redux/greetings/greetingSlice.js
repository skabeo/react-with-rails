import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  greeting: [],
  isLoading: false,
  error: '',
}

export const fetchGreeting = createAsyncThunk('fetch/greetingData', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/messages')
    return response.data
  } catch(error) {
    return error;
  }
})

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload
    });
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    });
  }
})

export default greetingSlice.reducer;
