export const getStatusColor = (status: string) => {
  switch (status) {
    case "ACTIVE":
      return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300";
    case "BLOCKED":
      return "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-300";
    case "INACTIVE":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300";
  }
};

export const getTransactionStatusColor = (status: string) => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300";
    case "PENDING":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300";
    case "REVERSED":
      return "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-400 text-gray-800";
  }
};

export const getWalletStatusVariant = (status: string) => {
  switch (status) {
    case "ACTIVE":
      return "default";
    case "INACTIVE":
      return "secondary";
    case "BLOCKED":
      return "destructive";
    default:
      return "outline";
  }
};

export const getUserStatusVariant = (status: string) => {
  console.log(status);
  switch (status) {
    case "ACTIVE":
      return "default";
    case "INACTIVE":
      return "secondary";
    case "BLOCKED":
      return "destructive";
    default:
      return "outline";
  }
};

export const getUserRoleVariant = (role: string) => {
  switch (role) {
    case "ADMIN":
      return "destructive";
    case "AGENT":
      return "default";
    case "USER":
      return "secondary";
    default:
      return "secondary";
  }
};
