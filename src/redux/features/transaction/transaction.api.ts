import { baseApi } from "@/redux/base-api";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMoney: builder.mutation({
      query: (data) => ({
        url: "/transaction/send-money",
        method: "POST",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    cashOut: builder.mutation({
      query: () => ({
        url: "/transaction/cash-out",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    cashIn: builder.mutation({
      query: () => ({
        url: "/transaction/cash-in",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    allTransactions: builder.query({
      query: () => ({
        url: "/transaction/all-transactions",
      }),
      providesTags: ["TRANSACTIONS"],
    }),
    allTransactionsMe: builder.query({
      query: () => ({
        url: "/transaction/all-transactions/me",
      }),
    }),
    approveTransaction: builder.mutation({
      query: (id) => ({
        url: `/transaction/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["TRANSACTIONS"],
    }),
    reverseTransaction: builder.mutation({
      query: (id) => ({
        url: `/transaction/reverse/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["TRANSACTIONS"],
    }),
  }),
});

export const {
  useSendMoneyMutation,
  useCashOutMutation,
  useCashInMutation,
  useAllTransactionsQuery,
  useAllTransactionsMeQuery,
  useApproveTransactionMutation,
  useReverseTransactionMutation,
} = transactionApi;
