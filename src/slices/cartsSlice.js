import { createSlice, createAsyncThunk , isAnyOf } from "@reduxjs/toolkit";


export const fetchCarts = createAsyncThunk('carts', async (limit) => {
      const data = await fetch(`https://fakestoreapi.com/carts?limit=${limit}`);
      return data.json();
    }
  );

export const fetchSingleCart = createAsyncThunk('cart', async (cartId) => {
    const data = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
    return data.json();
  }
);

const cartsSlice = createSlice({
    name: "carts",
    initialState: {
        data: null, 
        isLoading: false,
        error: false
    },
    extraReducers: (builder) => {
    
    builder.addMatcher(
        isAnyOf(fetchCarts.pending, fetchSingleCart.pending),
        (state) => {
                state.isLoading = true;
                state.error = null
            }
        )

      builder.addMatcher(
        isAnyOf(fetchCarts.fulfilled, fetchSingleCart.fulfilled),
        (state, { payload }) => {
              state.isLoading = false;
              state.carts = payload
            }
      )

      builder.addMatcher(
        isAnyOf(fetchCarts.rejected, fetchSingleCart.rejected),
        (state, action) => {
              state.isLoading = false;
              state.error = action.error.message
            }
      )
    },
});

export default cartsSlice.reducer;