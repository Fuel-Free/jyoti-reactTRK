import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'
      }),
    tagTypes: ['todo'],
    endpoints:(builder)=>({
        register: builder.mutation({
           query:(data)=>({
            url :'/register',
            method : 'POST',
            body : data,
           }),
           
          }),
          update: builder.mutation({
            query:(data)=>({
             url :'/update',
             method : 'PUT',
             body : data,
            }),
            
           }),
          getuser: builder.query({
            query: () => `/getData`,
            providesTags:['todo'] 
          }), 
          deteleData: builder.mutation({
            query:(data)=>({
             url :`/deleteData/${data}`,
             method : 'POST',
            }),
         invalidatesTags:['todo']
           }),
         
})
})

export const {useRegisterMutation,useGetuserQuery,useDeteleDataMutation, useUpdateMutation} = apiSlice
export default apiSlice