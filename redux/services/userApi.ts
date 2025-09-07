import { baseApiAndTags } from './baseApiAndTags';

export const userApi = baseApiAndTags.injectEndpoints({
  endpoints: (builder) => ({}),
  overrideExisting: true,
});
