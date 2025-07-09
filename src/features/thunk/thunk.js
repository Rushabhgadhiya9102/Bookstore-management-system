import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../firebase/config";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore'

const bookRef = collection(db, "books")

// -------------- fetch book data -----------------

export const fetchData = createAsyncThunk('books/fetchData', async(_,rejectWithValue)=>{
    try {
        const snapshots = await getDocs(bookRef)
        return snapshots.docs.map(doc=> ({...doc.data(), id:doc.id}))
    } catch (error) {
       return rejectWithValue(error.message)
    }
})

// --------------- add book data -------------------

export const addData = createAsyncThunk('books/addData', async(book,rejectWithValue) => {
    try {
        const docRef = await addDoc(bookRef,book)
        return {id:docRef.id, ...book}
    } catch (error) {
       return rejectWithValue(error.message)
    }
})

// --------------- delete book data -------------------

export const deleteData = createAsyncThunk('books/deleteData', async(id) =>{
    try {
        await deleteDoc(doc(bookRef, id))
        return id
    } catch (error) {
       return rejectWithValue(error.message)
    }
})

// --------------- update book data ------------------

export const updateData = createAsyncThunk("books,updateData", async(book,rejectWithValue)=>{
    try {
        const {id, ...bookData} = book
        const ref = doc(bookRef,id)
        await updateDoc(ref, bookData)
        return {id, ...bookData}
    } catch (error) {
       return rejectWithValue(error.message)
    }
})