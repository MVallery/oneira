import { baseQuery } from '@/state/baseQuery';

import { createApi } from '@reduxjs/toolkit/query/react';
import { UserT, UserWithTeacherT } from '../utils/types/UserT';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    getUser: builder.query<UserWithTeacherT, string>({
      query: (id) => `/auth/user/${id}`,
    }),
    createUser: builder.mutation<UserWithTeacherT, Partial<UserT>>({
      query: (body) => ({
        url: '/auth/user',
        method: 'POST',
        body,
      }),
    }),
    updateUser: builder.mutation<UserT, UserT>({
      query: ({ id, ...body }) => ({
        url: `/auth/user/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    updateSettings: builder.mutation<any, any>({
      query: ({ id, ...body }) => ({
        url: `/auth/settings/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,

  useCreateUserMutation,
  useUpdateUserMutation,
  useUpdateSettingsMutation,
} = authApi;
