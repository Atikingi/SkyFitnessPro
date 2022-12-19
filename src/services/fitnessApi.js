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
    }),
    fetchCoursePage: builder.query({
      async queryFn(id) {
        try {
          const courseFetch = await get(child(ref(db), `course/${id}`));
          return { data: courseFetch.val() };
        } catch (e) {
          console.log(e);
        }
      }
      // query: (id) => `course-page/${id}`
    })
  })
});

export const { useFetchCoursesQuery, useFetchCoursePageQuery } = fitnessApi;
