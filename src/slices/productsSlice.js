import { createSlice, createAsyncThunk , isAnyOf } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('products', async (limit) => {
      const data = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      return data.json();
    }
  );

export const fetchSingleProduct = createAsyncThunk('product', async (productId) => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return data.json();
  }
);

export const fetchProductsByCategory = createAsyncThunk('product', async (category) => {
  const data = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return data.json();
}
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: null, 
        isLoading: false,
        error: false
    },
    extraReducers: (builder) => {
    
    builder.addMatcher(
        isAnyOf(fetchProducts.pending, fetchSingleProduct.pending, fetchProductsByCategory.pending),
        (state) => {
                state.isLoading = true;
                state.error = null
            }
        )

      builder.addMatcher(
        isAnyOf(fetchProducts.fulfilled, fetchSingleProduct.fulfilled, fetchProductsByCategory.fulfilled),
        (state, { payload }) => {
              state.isLoading = false;
              state.products = payload
            }
      )

      builder.addMatcher(
        isAnyOf(fetchProducts.rejected, fetchSingleProduct.rejected, fetchProductsByCategory.rejected),
        (state, action) => {
              state.isLoading = false;
              state.error = action.error.message
            }
      )
    },
});

export default productsSlice.reducer;