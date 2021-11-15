import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6192d0a1d3ae6d0017da82d2.mockapi.io';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      return await axios.get('/contacts').then(({ data }) => data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await axios.post('/contacts', contact).then(({ data }) => data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
