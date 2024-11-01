import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants.js';


const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.token;
    
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    //console.log(headers);
    return headers;

  },
  credentials: 'include',
});


async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  //console.log(result);
  // Dispatch the logout action on 401.
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}


export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth, // Use the customized baseQuery
  endpoints: (builder) => ({}),
});