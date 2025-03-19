import { createSlice, createAsyncThunk , isAnyOf } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk('users', async (limit) => {
      const data = await fetch(`https://fakestoreapi.com/users?limit=${limit}`);
      return data.json();
    }
  );

export const fetchSingleUser = createAsyncThunk('user', async (userId) => {
    const data = await fetch(`https://fakestoreapi.com/users/${userId}`);
    return data.json();
  }
);

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: null, 
        isLoading: false,
        error: false
    },
    extraReducers: (builder) => {
    
    builder.addMatcher(
        isAnyOf(fetchUsers.pending, fetchSingleUser.pending),
        (state) => {
                state.isLoading = true;
                state.error = null
            }
        )

      builder.addMatcher(
        isAnyOf(fetchUsers.fulfilled, fetchSingleUser.fulfilled),
        (state, { payload }) => {
              state.isLoading = false;
              state.users = payload
            }
      )

      builder.addMatcher(
        isAnyOf(fetchUsers.rejected, fetchSingleUser.rejected),
        (state, action) => {
              state.isLoading = false;
              state.error = action.error.message
            }
      )
    },
});

export default usersSlice.reducer;