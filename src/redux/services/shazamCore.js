import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key","1c5a9b7fdamsh5979e6b0aa9bc18p1a23a2jsnf59bb5e2ccdc");
            return headers;
        },
    }),
    endpoints:(builder) => ({
        getTopCharts: builder.query({query: () =>  "/charts/track"}),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/v2/get-details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/songs/get-related-artist?track_id=${songid}` }),
    })
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;