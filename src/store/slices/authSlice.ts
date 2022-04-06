import { Resume } from '@/features/resume/@types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface IAuth {
  isAuthenticated?: boolean;
  currentUser?: object;
  resumes?: Resume[];
}

const initialState: IAuth = {
  isAuthenticated: false,
  currentUser: null,
  resumes: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<object>) => {
      state.currentUser = action.payload;
    },
    setResumes: (state, action: PayloadAction<Resume[]>) => {
      state.resumes = action.payload;
    },
  },
});

export const { setAuthenticated, setCurrentUser, setResumes } =
  authSlice.actions;

export const selectIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;
export const selectCurrentUser = (state: RootState): { [key: string]: any } =>
  state.auth.currentUser;
export const selectResumes = (state: RootState): Resume[] => state.auth.resumes;

export default authSlice.reducer;
