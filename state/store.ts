import { configureStore } from '@reduxjs/toolkit';
// api
import { authApi } from '@/features/account/state/authApi';

// slices
import accountSlice from '@/features/account/state/accountSlice';
import authSlice from '@/features/account/state/authSlice';

export const store = configureStore({
  reducer: {
    account: accountSlice,
    auth: authSlice,

    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
