import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from './store';
import { environment } from 'config/env.config';

export const baseQuery = fetchBaseQuery({
  baseUrl: environment.API_URL,
  prepareHeaders: async (headers, { getState }) => {
    // let rootState = getState() as RootState;
    // let token = rootState.user?.userData?.token;
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    //   headers.set('Accept', 'application/json, text/plain, */*');
    // }
    return headers;
  },
});

export const baseQueryWithResult = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  let result = await baseQuery(args, api, extraOptions);
  const getState = api.getState() as RootState;
  // const existingRefreshToken = getState.userSlice?.authTokens?.refresh?.token;

  // if (isUnauthorizedError(result)) {
  //   const refreshResult = await baseQuery(
  //     {
  //       url: endpoints.getRefreshToken(),
  //       body: { refreshToken: existingRefreshToken },
  //       method: 'POST',
  //     },
  //     api,
  //     extraOptions,
  //   );

  //   if (refreshResult?.data) {
  //     const updatedResult = refreshResult?.data as iReturnUserDetail;
  //     const token = updatedResult?.data?.tokens;
  //     api.dispatch(setAuthToken(token));

  //     result = await baseQuery(args, api, extraOptions);
  //   } else {
  //     logout();
  //     showErrorToast(t('sessionExpired'));
  //   }
  // }
  return result;
};
