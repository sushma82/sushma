import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
const   TRAINING_RECOMMENDATION_URL = `api/v1/training/training-recommendation`
const   OTHER_RECOMMENDATION_URL = `api/v1/training/other-recommendation`
const   RATINGS = `api/v1/ratings`
const   RATING_SCALE_DESCRIPTION = `api/v1/ratings/ratingscale-description`



export const pmsApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://40.117.174.202/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<void, string>({
            query: () => `/hello`,
        }),

        registerUser: builder.mutation<any, any>({
            query: (credentials) => ({
                url: `/api/v1/auth/register`,
                method: 'POST',
                body: credentials
            }),
        }),

        loginUser: builder.mutation<any, any>({
            // query: () => `/api/v1/auth/login`,
            query: (credentials) => ({
                url: `/api/v1/auth/login`,
                method: 'POST',
                body: credentials
            }),
        }),
        logout: builder.query<void, string>({
            query: () => `/api/v1/auth/logout`,
        }),
        verifyEmail: builder.mutation<any, any>({
            query: (email) => ({
                headers: {
                    'Content-Type': 'application/json',
                },
                url: `/api/v1/auth/verify-email`,
                method: 'POST',
                body: email
            })
        }),
        resetPassword: builder.mutation<any, any>({
            query: (data) => ({
                url: `/api/v1/auth/reset-password`,
                method: 'POST',
                body: data
            })
        }),
        forgotPassword: builder.mutation<void, string>({
            query: (email) => ({
                url: `/api/v1/auth/forgot-password`,
                method: 'POST',
                body: email
            }),
        }),

        getEmployee: builder.query<any, any>({
            query: () => ({
                url: `api/v1/employee/get-employee`
            }),
        }),

        getTrainingRecommendation: builder.query<any,any>({
            query: () => ({
                url: TRAINING_RECOMMENDATION_URL
            }),
        }),

        createTrainingRecommendation: builder.mutation<any,any>({
            query: (data) => ({
                url: TRAINING_RECOMMENDATION_URL,
                method : "POST", 
                body : data
            }),
        }),

        deleteTrainingRecommendation: builder.mutation<any,any>({
            query: (id) => ({
                url: `${TRAINING_RECOMMENDATION_URL}/${id}`,
                method : "DELETE", 
            }),
        }),

        getOtherRecommendation: builder.query<any,any>({
            query: () => ({
                url: OTHER_RECOMMENDATION_URL
            })
        }),

         getSingleOtherRecommendation: builder.query<any,any>({
            query: (id) => ({
                url: `${OTHER_RECOMMENDATION_URL}/${id}`
            })
        }),
        
        createOtherRecommendation: builder.mutation<any,any>({
            query: (data) => ({
                url: OTHER_RECOMMENDATION_URL,
                method : "POST", 
                body : data
            }),
        }),

        deleteOtherRecommendation: builder.mutation<any,any>({
            query: (id) => ({
                url: `${OTHER_RECOMMENDATION_URL}/${id}`,
                method : "DELETE", 
            }),
        }),

        editOtherRecommendation: builder.mutation<any,any>({
            query: (data) => ({
                url: `${OTHER_RECOMMENDATION_URL}/${data.id}`,
                method : "PATCH",
                body : data
            }),
        }),


        getRatings: builder.query<any,any>({
            query: () => ({
                url: RATINGS
            })
        }),

        createRatings: builder.mutation<any,any>({
            query: (data) => ({
                url: RATINGS,
                method : "POST", 
                body : data
            }),
        }),

        deleteRatings: builder.mutation<any,any>({
            query: (id) => ({
                url: `${RATINGS}/${id}`,
                method : "DELETE" 
            }),
        }),

        getRatingScale: builder.query<any,any>({
            query: () => ({
                url: RATING_SCALE_DESCRIPTION
            })
        }),

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPokemonByNameQuery,
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutQuery,
    useVerifyEmailMutation,
    useResetPasswordMutation,
    useForgotPasswordMutation,
    useGetEmployeeQuery,
    useGetTrainingRecommendationQuery,
    useGetOtherRecommendationQuery,
    useGetRatingsQuery,
    useCreateTrainingRecommendationMutation,
    useCreateOtherRecommendationMutation,
    useCreateRatingsMutation,
    useDeleteRatingsMutation,
    useDeleteOtherRecommendationMutation,
    useDeleteTrainingRecommendationMutation,
    useGetRatingScaleQuery,
    useEditOtherRecommendationMutation,
    useGetSingleOtherRecommendationQuery

    
} = pmsApi