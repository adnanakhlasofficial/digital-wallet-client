export function getUserInitials(userName: string) {
  if (typeof userName !== 'string') return '';

  const words = userName.trim().split(/\s+/);

  const initials = words.map(word => word[0].toUpperCase()).join('');

  return initials;
}
