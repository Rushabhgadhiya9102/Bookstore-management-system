import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// ----------- auth login --------------

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, rejectWithValue) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ------------- auth signup -------------

export const signUpUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password }, rejectWithValue) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// --------------- auth login ----------------

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
