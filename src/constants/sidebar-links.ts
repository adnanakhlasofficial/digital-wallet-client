import AllTransactions from "@/pages/AllTransactions";
import AllUsers from "@/pages/AllUsers";
import AllWallets from "@/pages/AllWallets";
import CashIn from "@/pages/CashIn";
import CashOut from "@/pages/CashOut";
import EditProfile from "@/pages/EditProfile";
import MyProfile from "@/pages/MyProfile";
import sendMoney from "@/pages/sendMoney";
import type { ISidebarItem, TRole } from "@/types";
import { checkAuth } from "@/utils/check-auth";
import { CreditCard, Send, UserCog } from "lucide-react";
import { RiUser3Line } from "react-icons/ri";
import { userRole } from "./user-role";

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
        component: checkAuth(
          MyProfile,
          userRole.admin as TRole,
          userRole.agent as TRole,
          userRole.user as TRole
        ),
      },
      {
        title: "Edit Profile Page",
        icon: UserCog,
        url: "/dashboard/edit-profile",
        component: checkAuth(
          EditProfile,
          userRole.admin as TRole,
          userRole.agent as TRole,
          userRole.user as TRole
        ),
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
        component: checkAuth(
          AllUsers,
          userRole.admin as TRole,
          userRole.agent as TRole,
          userRole.user as TRole
        ),
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
        component: checkAuth(CashIn, userRole.agent as TRole),
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
        component: checkAuth(AllTransactions, userRole.admin as TRole),
      },
      {
        title: "All Wallets",
        icon: CreditCard,
        url: "/dashboard/all-wallets",
        component: checkAuth(AllWallets, userRole.admin as TRole),
      },
    ],
  },
];
