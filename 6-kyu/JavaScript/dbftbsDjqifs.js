/*

  Caesar Ciphers are one of the most basic forms of encryption. It consists of
  a message and a key, and it shifts the letters of the message for the value
  of the key.

  Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

  Your task
  Your task is to create a function encryptor that takes 2 arguments - key and
  message - and returns the encrypted message.

  Make sure to only shift letters, and be sure to keep the cases of the letters
  the same. All punctuation, numbers, spaces, and so on should remain the same.

  Also be aware of keys greater than 26 and less than -26. There's only 26
  letters in the alphabet!

  Examples
  A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.
  A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.

  https://www.codewars.com/kata/546937989c0b6ab3c5000183

*/

function encryptor (key, message) {
	key = key % 26;
  return message
    .split('')
    .map((char) => {
      const lowerCaseChar = char.toLowerCase();
      const upperCaseChar = char.toUpperCase();
      
      if (lowerCaseChar === upperCaseChar) return char;
      
      const isUpperCase = (char === upperCaseChar);
      const subtrahend = isUpperCase ? 65 : 97;
      const charCode = char.charCodeAt(0);
      const newCharCode = (charCode + key + 26 - subtrahend) % 26 + subtrahend;
  
      return String.fromCharCode(newCharCode);
    })
    .join('');
}
