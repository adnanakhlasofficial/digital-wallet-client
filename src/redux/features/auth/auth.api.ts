import { baseApi } from "@/redux/base-api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["USER"],
    }),
    userMe: builder.query({
      query: () => ({
        url: "/user/me",
      }),
      providesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useUserMeQuery,
  useLogoutMutation,
  useRegisterMutation,
} = authApi;
