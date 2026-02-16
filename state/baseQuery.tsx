import { isWeb } from '@/utils/constants/platform';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = isWeb
  ? process.env.EXPO_PUBLIC_BACKEND_URL
  : process.env.EXPO_PUBLIC_BACKEND_URL_MOBILE || 'http://localhost:8000';

export const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
});
