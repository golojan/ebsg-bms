import bcrypt from 'bcryptjs';
/**
 * Generates a random password of the specified length.
 *
 * @param length The length of the password to generate.
 * @returns A Promise that resolves to a string containing the generated password.
 */

export const generateCode = async (length: number): Promise<string> => {
  let code = '';
  const numbers = '0123456789';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    code += numbers.charAt(randomIndex);
  }
  return code;
};

export const generatePassword = async (
  length: number
): Promise<{
  password: string;
  hash: string;
}> => {
  let password = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  // ncryput the password.
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  // Return the generated password.
  return {
    password,
    hash,
  };
};
