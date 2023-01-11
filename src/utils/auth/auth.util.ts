export function isEmailValid(email: string): boolean {
  return email.includes('@') && email.includes('.');
}

export function isPasswordValid(password: string): boolean {
  return password.length >= 8;
}
