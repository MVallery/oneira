import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeacherT } from '../utils/types/TeacherT';
import { UserT } from '../utils/types/UserT';

type SupaUserT = {
  id: string;
  email?: string;
};
interface AuthState {
  user: UserT;
  teacher: TeacherT;
  supaUser: SupaUserT;
  // activeClassesAnd
}

const initialState: AuthState = {
  user: {
    id: '',
    name: '',
    type: 'Teacher',
    email: '',
  },
  teacher: {
    id: 0,
    user_id: '',
    type: '',
  },
  // store supabase user data separately to trigger update to user once ready
  supaUser: {
    id: '',
    email: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserT>) {
      state.user = action.payload;
    },
    setSupaUser(state, action: PayloadAction<SupaUserT>) {
      state.supaUser = action.payload;
    },
    setTeacher(state, action: PayloadAction<TeacherT>) {
      state.teacher = action.payload;
    },
  },
});

export const { setUser, setSupaUser, setTeacher } = authSlice.actions;
export default authSlice.reducer;
