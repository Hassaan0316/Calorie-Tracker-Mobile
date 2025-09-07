import { createApi } from '@reduxjs/toolkit/query';
import { baseQueryWithResult } from 'redux/baseQuery';

export const baseApiAndTags = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithResult,
  tagTypes: ['user'],
  endpoints: (builder) => ({}),
});
