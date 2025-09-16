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
