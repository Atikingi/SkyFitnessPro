import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import db from '../firebase';
import { get, child, ref } from 'firebase/database';

export const fitnessApi = createApi({
  reducerPath: 'fitnessApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchCourses: builder.query({
      async queryFn() {
        try {
          const coursesFetch = await get(child(ref(db), 'course'));
          const coursesList = Object.values(coursesFetch.val());

          return { data: coursesList };
        } catch (e) {
          console.log(e);
        }
      }
    })
  })
});

export const { useFetchCoursesQuery } = fitnessApi;
