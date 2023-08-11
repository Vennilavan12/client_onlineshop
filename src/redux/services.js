// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '../constants'

// Define a service using a base URL and expected endpoints
export const onlineShopApi = createApi({
  reducerPath: 'onlineShopApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
        query: () =>({
            url:"/products",
            method:"GET"            
          }),
  }),
}),
})
export const { useGetAllProductsQuery } = onlineShopApi