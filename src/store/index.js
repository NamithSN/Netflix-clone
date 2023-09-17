import {configureStore,createAsyncThunk,createSlice} from '@reduxjs/toolkit'

const initailSate ={
    movie:[],
    genereLoaded: false,
    geners:[]
}