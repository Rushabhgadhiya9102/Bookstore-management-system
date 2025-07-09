import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../features/books/booksSlice';
import formReducer from '../features/hide/hideShowSlice';
import authReducer from '../auth/authSlice'

const store = configureStore({
    reducer: {
        books: booksReducer,
        form : formReducer,
        auth: authReducer
    }
})

export default store