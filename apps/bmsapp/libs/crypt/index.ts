import Cryptr from 'cryptr';
import bcrypt from 'bcryptjs';
const { NEXT_PUBLIC_CRYPTR_SECRET_KEY } = process.env;

export const passwordify = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

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

export const generateToken = async (length: number): Promise<string> => {
  let token = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
};

export const encrypt = (text: string): string => {
  const cryptr = new Cryptr(NEXT_PUBLIC_CRYPTR_SECRET_KEY as string);
  return cryptr.encrypt(text);
};

export const decrypt = (text: string): string => {
  const cryptr = new Cryptr(NEXT_PUBLIC_CRYPTR_SECRET_KEY as string);
  return cryptr.decrypt(text);
};

export const encryptObject = (object: object): object => {
  const cryptr = new Cryptr(NEXT_PUBLIC_CRYPTR_SECRET_KEY as string);
  const encryptedObject = {} as any;
  for (const [key, value] of Object.entries(object)) {
    encryptedObject[key] = cryptr.encrypt(value);
  }
  return encryptedObject;
};

export const decryptObject = (object: object): object => {
  const cryptr = new Cryptr(NEXT_PUBLIC_CRYPTR_SECRET_KEY as string);
  const decryptedObject = {} as any;
  for (const [key, value] of Object.entries(object)) {
    decryptedObject[key] = cryptr.decrypt(value);
  }
  return decryptedObject;
};

export const encryptArray = (array: Array<any>): Array<any> => {
  const cryptr = new Cryptr(NEXT_PUBLIC_CRYPTR_SECRET_KEY as string);
  const encryptedArray = [] as any;
  for (const value of array) {
    encryptedArray.push(cryptr.encrypt(value));
  }
  return encryptedArray;
};

export const decryptArray = (array: Array<any>): Array<any> => {
  const cryptr = new Cryptr(NEXT_PUBLIC_CRYPTR_SECRET_KEY as string);
  const decryptedArray = [] as any;
  for (const value of array) {
    decryptedArray.push(cryptr.decrypt(value));
  }
  return decryptedArray;
};
