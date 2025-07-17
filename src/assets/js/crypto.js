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

export function decrypt(data) {

if (typeof data !== "string" || !data.includes(":")) {
  console.log("❌ Dữ liệu giải mã không hợp lệ:", data);
  return null;
}
  const ivHex = data.split(":")[0];
  const ciphertextHex = data.split(":")[1];

  const key =CryptoJS.enc.Utf8.parse(SECRET_KEY);
  const iv = CryptoJS.enc.Hex.parse(ivHex);
  const ciphertext = CryptoJS.enc.Hex.parse(ciphertextHex);

  // Tạo WordArray ciphertext với đúng số bytes
  const ciphertextWA = CryptoJS.lib.WordArray.create(ciphertext.words, ciphertext.sigBytes);

  const decrypted = CryptoJS.AES.decrypt(
    { ciphertext: ciphertextWA },
    key,
    {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  try {
    const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedStr);
  } catch (err) {
    console.error("Lỗi giải mã hoặc JSON parse", err);
    return null;
  }

 
}

export function decryptAESCBC(encryptedHex) {
  try {
    const key = CryptoJS.enc.Base64.parse(SECRET_KEY);

    const wordArray = CryptoJS.enc.Hex.parse(encryptedHex);
    const totalBytes = wordArray.sigBytes;

    const iv = CryptoJS.lib.WordArray.create(wordArray.words.slice(0, 4), 16);
    const ciphertextWords = wordArray.words.slice(4);
    const ciphertextBytes = totalBytes - 16;
    const actualCiphertext = CryptoJS.lib.WordArray.create(ciphertextWords, ciphertextBytes);

    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: actualCiphertext },
      key,
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    // Trả về base64 thay vì utf8
    return decrypted.toString(CryptoJS.enc.Base64);

  } catch (error) {
    console.error('Giải mã thất bại:', error);
    return '';
  }
}