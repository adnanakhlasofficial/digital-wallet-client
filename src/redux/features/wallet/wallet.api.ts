import { baseApi } from "@/redux/base-api";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWallets: builder.query({
      query: () => ({
        url: "/wallet/all-wallets",
      }),
      providesTags: ["WALLETS"],
    }),
    getSingleWallet: builder.query({
      query: (id) => ({
        url: `/wallet/${id}`,
      }),
    }),
    blockWallet: builder.mutation({
      query: (id) => ({
        url: `/wallet/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["WALLETS"],
    }),
    activateWallet: builder.mutation({
      query: (id) => ({
        url: `/wallet/unblock/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["WALLETS"],
    }),
  }),
});

export const {
  useGetAllWalletsQuery,
  useGetSingleWalletQuery,
  useBlockWalletMutation,
  useActivateWalletMutation,
} = walletApi;
