import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const fitnessApi = createApi({
  reducerPath: 'fitnessApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'корневой url'
  }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => ({
        url: '/дополнение после базового url'
      })
    })
  })
});

// раскомментировать при работе с хуком
// export const {useGetCoursesQuery} = fitnessApi;
