import AllTransactions from "@/pages/AllTransactions";
import AllUsers from "@/pages/AllUsers";
import AllWallets from "@/pages/AllWallets";
import CashIn from "@/pages/CashIn";
import CashOut from "@/pages/CashOut";
import EditProfile from "@/pages/EditProfile";
import MyProfile from "@/pages/MyProfile";
import sendMoney from "@/pages/sendMoney";
import type { ISidebarItem } from "@/types";
import { CreditCard, Send, UserCog } from "lucide-react";
import { RiUser3Line } from "react-icons/ri";

export const commonSidebar: ISidebarItem[] = [
  {
    title: "Profile & Personal Info",
    show: true,
    items: [
      {
        index: true,
        title: "My Profile",
        icon: RiUser3Line,
        url: "/dashboard/my-profile",
        component: MyProfile,
      },
      {
        title: "Edit Profile Page",
        icon: UserCog,
        url: "/dashboard/edit-profile",
        component: EditProfile,
      },
    ],
  },
  {
    title: "Users",
    show: true,
    items: [
      {
        title: "All Users",
        icon: CreditCard,
        url: "/dashboard/all-users",
        component: AllUsers,
      },
    ],
  },
];

export const userSidebar: ISidebarItem[] = [
  ...commonSidebar,
  {
    title: "Wallet & Transactions",
    show: false,
    items: [
      {
        title: "Send Money",
        icon: Send,
        url: "/dashboard/send-money/:walletId",
        component: sendMoney,
      },
      {
        title: "Cash Out",
        icon: CreditCard,
        url: "/dashboard/cash-out/:walletId",
        component: CashOut,
      },
    ],
  },
];
export const agentSidebar: ISidebarItem[] = [
  ...commonSidebar,
  {
    title: "Wallet & Transactions",
    show: false,
    items: [
      {
        title: "Cash In",
        icon: Send,
        url: "/dashboard/cash-in/:walletId",
        component: CashIn,
      },
    ],
  },
];

export const adminSidebar: ISidebarItem[] = [
  ...commonSidebar,
  {
    title: "Wallet & Transactions",
    show: true,
    items: [
      {
        title: "All Transactions",
        icon: Send,
        url: "/dashboard/all-transactions",
        component: AllTransactions,
      },
      {
        title: "All Wallets",
        icon: CreditCard,
        url: "/dashboard/all-wallets",
        component: AllWallets,
      },
    ],
  },
];
