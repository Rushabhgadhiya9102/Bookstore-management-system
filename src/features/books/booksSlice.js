import { createSlice } from "@reduxjs/toolkit";
import { addData, deleteData, fetchData, updateData } from "../thunk/thunk";

const initialState = {
    books: [],
    selectedBooks: null,
    error: null,
    loading: false,
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setSelectedBooks: (state, action) => {
            state.selectedBooks = action.payload;
        },
        clearSelectedBooks: (state) => {
            state.selectedBooks = null;
        },
    },
    extraReducers: (builder) => {
        // ---------- fetch book data ----------------

        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.books = action.payload;
        });

        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        // ---------- create book data ----------------

        builder.addCase(addData.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(addData.fulfilled, (state, action) => {
            state.loading = false;
            state.books.push(action.payload);
        });

        builder.addCase(addData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        // ---------- delete book data ----------------

        builder.addCase(deleteData.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.loading = false;
            state.books = state.books.filter((book) => book.id !== action.payload);
        });

        builder.addCase(deleteData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        // ---------- update book data ----------------

        builder.addCase(updateData.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(updateData.fulfilled, (state, action) => {
            state.loading = false;
            state.books = state.books.map((val) => {
                if (val.id === action.payload.id) {
                    return action.payload;
                } else {
                    return val;
                }
            });
        });

        builder.addCase(updateData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const {setSelectedBooks, clearSelectedBooks} = booksSlice.actions;
export default booksSlice.reducer;
