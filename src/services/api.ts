import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurants } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = api
export default api
