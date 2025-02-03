const CryptoJS = require("crypto-js");

export function hashText(text) {
    return CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
}