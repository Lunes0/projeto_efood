import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurants } from '../pages/Home'

type Product = {
  id: string
  price: string
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      expires: {
        month: number
        year: number
      }
      code: number
    }
  }
}

type PurchseRes = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchseRes, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantQuery, usePurchaseMutation } = api
export default api
