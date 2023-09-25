// warehouseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchWarehouseDataAsync = createAsyncThunk(
  'warehouse/fetchData',
  async () => {
    const response = await fetch( 'http://localhost:4000/warehouse');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

export const editWarehouseDataAsync = createAsyncThunk(
  'warehouse/editData',
  async ({ id, updatedData }) => {
    // Assuming you have an API endpoint for editing data by id
    const response = await fetch(`http://localhost:4000/warehouse/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

// Create a slice
const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState: {
    warehouseData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWarehouseDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWarehouseDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.warehouseData = action.payload;
      })
      .addCase(fetchWarehouseDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(editWarehouseDataAsync.fulfilled, (state, action) => {
        state.warehouseData = action.payload;
      });
  },
});

export default warehouseSlice.reducer;
