export const getUserStatusVariant = (status: string) => {
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
