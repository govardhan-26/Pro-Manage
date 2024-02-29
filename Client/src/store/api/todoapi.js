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
    particularTodo: builder.query({
      query: (body) => `todos/particular/${body}`,
      providesTags: ["particularTodo"],
    }),
    getAllTodos: builder.query({
      query: () => "/todos",
      providesTags: ["todosall"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `todos/addtodo`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todosall"],
    }),
    addLabel: builder.mutation({
      query: (data) => ({
        url: `todos/label/${data.taskId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["todosall"],
    }),
    editTodo: builder.mutation({
      query: (data) => ({
        url: `todos/update/${data.taskId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["todosall", "particularTodo"],
    }),
    deleteCourse: builder.mutation({
      query: (data) => ({
        url: `course/deleteCourse/${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todosall"],
    }),
  }),
});

export const {
  useAddTaskMutation,
  useGetAllTodosQuery,
  useAddLabelMutation,
  useParticularTodoQuery,
  useEditTodoMutation,
} = TaskApi;
