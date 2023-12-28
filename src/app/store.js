import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tvreducer from '../features/TV/tvSlice'
import moviereducer from '../features/Movie/movieSlice'
import commonreducer from '../features/Common/commonSlice'
import detailreducer from '../features/Details/detailSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tv:tvreducer,
    movie:moviereducer,
    common:commonreducer,
    detail:detailreducer
  },
});
