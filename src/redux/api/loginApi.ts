import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import Config from 'react-native-config';

export const loginService = createApi({
  reducerPath: 'loginService',
  baseQuery: fetchBaseQuery({baseUrl: Config.URL}),
  endpoints: build => ({
    login: build.mutation<LoginApi.ResponseLogin, LoginApi.PayloadLogin>({
      query: payload => ({
        url: 'posts',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {useLoginMutation} = loginService;
