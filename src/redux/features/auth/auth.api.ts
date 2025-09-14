import { baseApi } from "@/redux/base-api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        data: loginData
      })
    }),
    userMe: builder.query({
      query: () => ({
        url: "/user/me"
      }),
      providesTags: ['USER']
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      })
    }),
    updateUser: builder.mutation({
      query: ({ _id, ...userInfo }) => ({
        url: `/user/update/${_id}`,
        method: "PUT",
        data: userInfo
      }),
      invalidatesTags: ['USER']
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo
      })
    })
  })
})

export const { useLoginMutation, useUserMeQuery, useLogoutMutation, useUpdateUserMutation, useRegisterMutation } = authApi
