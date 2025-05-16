// filepath: /Users/hungtv/Documents/nodeJs/vzstudio/src/assets/js/decrypt.js
import CryptoJS from "crypto-js";
// AES-256-CBC
const SECRET_KEY = "BIryQ4iRqJo1NqwJzJbMvTShcU6Iz4/b"; 

export function encrypt(data) {

  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }

  const iv = CryptoJS.lib.WordArray.random(16);

  const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(SECRET_KEY), {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return iv.toString(CryptoJS.enc.Hex) + ":" + encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}

export function decrypt(encrypted) {
  const parts = encrypted.split(':');
  if (parts.length !== 2) throw new Error('Invalid encrypted data format');
  const iv = CryptoJS.enc.Hex.parse(parts[0]);
  const encryptedHex = CryptoJS.enc.Hex.parse(parts[1]);
  const encryptedBase64 = CryptoJS.enc.Base64.stringify(encryptedHex);

  const decrypted = CryptoJS.AES.decrypt(
    encryptedBase64,
    CryptoJS.enc.Utf8.parse(SECRET_KEY),
    { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
  );
  const result = decrypted.toString(CryptoJS.enc.Utf8);
  try {
    return JSON.parse(result);
  } catch {
    return result;
  }
}