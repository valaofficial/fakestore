import { createSlice, createAsyncThunk , isAnyOf } from "@reduxjs/toolkit";


export const login = createAsyncThunk('login', async (body) => {
     const credentials = {
        "username": body.username,
        "password": body.password
     }

        const config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        };

      const data = await fetch(
        'https://fakestoreapi.com/auth/login', config)
        .then(response => response.json())
        .then(data => 
            {
                return data
            });

        return data;
    }
  );

const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: null, 
        isLoading: false,
        error: false
    },
    extraReducers: (builder) => {
    
    builder.addMatcher(
        isAnyOf(login.pending),
        (state) => {
                state.isLoading = true;
                state.error = null
            }
        )

      builder.addMatcher(
        isAnyOf(login.fulfilled),
        (state, { payload }) => {
              state.isLoading = false;
              state.auth = payload
            }
      )

      builder.addMatcher(
        isAnyOf(login.rejected),
        (state, action) => {
              state.isLoading = false;
              state.error = action.error.message
            }
      )
    },
});

export default authSlice.reducer;