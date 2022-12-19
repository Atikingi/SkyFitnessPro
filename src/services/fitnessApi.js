import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import db from '../firebase';
import { get, child, ref, set, update } from 'firebase/database';

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
    addUserData: builder.mutation({
      async queryFn(payload) {
        try {
          const newUser = await set(ref(db, 'users'), {
            [payload.id]: {
              _id: payload.id,
              username: payload.username
            }
          });

          return { data: newUser };
        } catch (e) {
          console.log(e);
        }
      }
    }),
    addCourseForUser: builder.mutation({
      async queryFn(payload) {
        try {
          const userRef = ref(db, 'users/' + payload.id);

          const userCoursesFetch = await get(child(ref(db), 'users/' + payload.id + '/courses'));
          const coursesList = userCoursesFetch.val();

          if (coursesList === null) {
            await update(userRef, { courses: [payload.courseId] });
          } else {
            coursesList.push(payload.courseId);

            const uniqueCourseArr = Array.from(new Set(coursesList));

            await update(userRef, { courses: uniqueCourseArr });
          }

          return { data: coursesList };
        } catch (e) {
          console.log(e);
        }
      }
    })
  })
});

export const { useFetchCoursesQuery, useAddUserDataMutation, useAddCourseForUserMutation } =
  fitnessApi;
