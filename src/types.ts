import type { ComponentType } from "react";

export interface IUpdateUser {
  _id: string;
  name?: string;
  password: string;
  newPassword?: string;
}

export interface UserData {
  _id: string;
  name: string;
  phone: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  wallet: {
    _id: string;
    user: string;
    balance: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IPendingRequest {
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
}

export interface ISidebarItem {
  title: string;
  items: {
    index?: boolean;
    title: string;
    icon: ComponentType;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "ADMIN" | "AGENT" | "USER";
export type TStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";

export interface IWallet {
  _id: string;
  user: {
    name: string;
    phone: string;
    role: string;
    status: string;
  };
  balance: number;
  status: string;
}

export interface ITransaction {
  _id: string;
  amount: number;
  fee: number;
  from_wallet: {
    user?: {
      name: string;
      phone: string;
    };
    balance: number;
    status: string;
  };
  to_wallet: {
    user?: {
      name: string;
      phone: string;
    };
    balance: number;
    status: string;
  };
  status: string;
  initiated_by?: {
    name: string;
    phone: string;
    role: string;
    status: string;
  };
  transaction_id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  _id: string;
  name: string;
  phone: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  wallet: {
    balance: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
}
