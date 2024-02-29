import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const TaskApi = createApi({
  reducerPath: "taskTodo",
  tagTypes: ["todoTask"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9089/",
    prepareHeaders: (headers) => {
      const userInfo = Cookies.get("userInfo");
      const { token } = JSON.parse(userInfo);
      if (token) {
        headers.set(`authorization`, `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    adminCourses: builder.query({
      query: (body) => `todos`,
      providesTags: ["Courses"],
    }),
    particularTodo: builder.query({
      query: (body) => `todos/particular/${body}`,
      providesTags: ["particularTodo"],
    }),
    getAllTodos: builder.query({
      query: () => "/todos",
      refetchOnMountOrArgChange: true,
      providesTags: ["AllTodos", "login"],
    }),
    updateAdminDetails: builder.mutation({
      query: (data) => ({
        url: `admin/profileUpdate`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Courses", "Allcourses", "name"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `todos/addtodo`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AllTodos"],
    }),
    addLabel: builder.mutation({
      query: (data) => ({
        url: `todos/label/${data.taskId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["AllTodos"],
    }),
    editCourse: builder.mutation({
      query: (data) => ({
        url: `course/updateCourse/${data.courseId}`,
        method: "PUT",
        body: data.formData,
      }),
      invalidatesTags: ["Courses", "Allcourses", "particularTodo"],
    }),
    deleteCourse: builder.mutation({
      query: (data) => ({
        url: `course/deleteCourse/${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses", "Allcourses"],
    }),
    deleteAdmin: builder.mutation({
      query: (data) => ({
        url: `admin/deleteprofile/${data}`,
        method: "DELETE",
      }),
    }),
    getAdminName: builder.query({
      query: (body) => `admin/adminName/${body}`,
      providesTags: ["name"],
    }),
  }),
});

export const {
  useAddTaskMutation,
  useGetAllTodosQuery,
  useAddLabelMutation,
  useParticularTodoQuery,
} = TaskApi;

export const { getAllTodos } = TaskApi.endpoints;
