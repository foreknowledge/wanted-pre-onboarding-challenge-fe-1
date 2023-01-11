export function checkEmailValidation(email: string): boolean {
  return email.includes('@') && email.includes('.');
}

export function checkPasswordValidation(password: string): boolean {
  return password.length >= 8;
}
