import { baseApi } from "@/redux/base-api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all-users",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ _id, ...userInfo }) => ({
        url: `/user/update/${_id}`,
        method: "PUT",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserMutation } = userApi;
