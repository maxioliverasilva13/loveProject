import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TodosService = createApi({
  reducerPath: "TodosService",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_TODOS_API_URL}/api/` }),
  tagTypes: ["Todo"],
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => `todos`,
      providesTags: ["Todo"],
    }),
    addTodo: builder.mutation({
      query: ({ title, completed }) => {
        return {
          url: "todos",
          method: "POST",
          body: { title, completed },
        };
      },
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: ({ _id }) => {
        return {
          url: "todos",
          method: "DELETE",
          body: { _id },
        };
      },
      invalidatesTags: ["Todo"],
    }),
    updateTodo: builder.mutation({
      query: ({ _id, ...todo }) => {
        return {
          url: "todos",
          method: "PUT",
          body: { _id, todo },
        };
      },
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const { useGetTodosQuery, useUpdateTodoMutation, useAddTodoMutation, useDeleteTodoMutation } = TodosService;
