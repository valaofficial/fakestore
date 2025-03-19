import { createSlice, createAsyncThunk , isAnyOf } from "@reduxjs/toolkit";


export const fetchCategories = createAsyncThunk('categories', async (limit) => {
      const data = await fetch(`https://fakestoreapi.com/products/categories?limit=${limit}`);
      return data.json();
    }
  );

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        data: null, 
        isLoading: false,
        error: false
    },
    extraReducers: (builder) => {
    
    builder.addMatcher(
        isAnyOf(fetchCategories.pending),
        (state) => {
                state.isLoading = true;
                state.error = null
            }
        )

      builder.addMatcher(
        isAnyOf(fetchCategories.fulfilled),
        (state, { payload }) => {
              state.isLoading = false;
              state.categories = payload
            }
      )

      builder.addMatcher(
        isAnyOf(fetchCategories.rejected),
        (state, action) => {
              state.isLoading = false;
              state.error = action.error.message
            }
      )
    },
});

export default categoriesSlice.reducer;