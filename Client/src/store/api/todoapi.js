import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
export const TaskApi = createApi({
  reducerPath: 'taskTodo',
  tagTypes: ['todos', 'particularTodo'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9089/',
    prepareHeaders: (headers) => {
      const userInfo = Cookies.get('userInfo')
      const { token } = JSON.parse(userInfo)
      if (token) {
        headers.set(`authorization`, `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    particularTodo: builder.query({
      query: (body) => `todos/particular/${body}`,
      providesTags: ['particularTodo'],
    }),
    getAllTodos: builder.query({
      query: () => '/todos',
      providesTags: ['todos'],
    }),
    getDateFilter: builder.query({
      query: (body) => `todos/filter/${body}`,
      providesTags: ['filter'],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `todos/addtodo`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['todos', 'filter', 'share'],
    }),
    addLabel: builder.mutation({
      query: (data) => ({
        url: `todos/label/${data.taskId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['todos', 'filter', 'share', 'particularTodo'],
    }),
    editTodo: builder.mutation({
      query: (data) => ({
        url: `todos/update/${data.taskId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['todos', 'particularTodo', 'filter', 'share'],
    }),
    deleteTodo: builder.mutation({
      query: (data) => ({
        url: `todos/delete/${data}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todos', 'particularTodo', 'filter', 'share'],
    }),
  }),
})

export const {
  useAddTaskMutation,
  useGetAllTodosQuery,
  useGetDateFilterQuery,
  useAddLabelMutation,
  useParticularTodoQuery,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = TaskApi
