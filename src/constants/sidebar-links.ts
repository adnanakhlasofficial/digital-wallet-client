import EditProfile from "@/pages/EditProfile";
import MyProfile from "@/pages/MyProfile";
import TransferFund from "@/pages/TransferFund";
import WithdrawMoney from "@/pages/WithdrawMoney";
import type { ISidebarItem } from "@/types";
import { CreditCard, Send, UserCog } from "lucide-react";
import { RiUser3Line } from "react-icons/ri";

export const userSidebar: ISidebarItem[] = [
  {
    title: "Profile & Personal Info",
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
    title: "Wallet & Transactions",
    items: [
      {
        title: "Transfer fund",
        icon: Send,
        url: "/dashboard/transfer-fund",
        component: TransferFund,
      },
      {
        title: "Withdraw Money",
        icon: CreditCard,
        url: "/dashboard/withdraw-money",
        component: WithdrawMoney,
      },
    ],
  },
];

export const adminSidebar: ISidebarItem[] = [
  {
    title: "Profile & Personal Info",
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
    title: "Wallet & Transactions",
    items: [
      {
        title: "All Transactions",
        icon: Send,
        url: "/dashboard/all-transactions",
        component: TransferFund,
      },
      {
        title: "All Wallets",
        icon: CreditCard,
        url: "/dashboard/all-wallets",
        component: WithdrawMoney,
      },
      {
        title: "All Users",
        icon: CreditCard,
        url: "/dashboard/all-users",
        component: WithdrawMoney,
      },
    ],
  },
];
