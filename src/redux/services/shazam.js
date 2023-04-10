import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers
        .set('X-RapidAPI-Key', 'a6947a9c35msh75f707c64c1891dp10f55ajsn395cf3f986af')
        .set('X-RapidAPI-Host', 'shazam.p.rapidapi.com')

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTrackCharts: builder.query({ query: '/charts/track' })
  })
})

export const { useGetTrackChartsQuery } = shazamApi;