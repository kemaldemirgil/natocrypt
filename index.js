const nato_alphabet = require("./utils/nato");

/**
 * This function takes in a character and returns
 * back the nato alphabet representataion of if
 *
 * @param {String} letter
 * @returns {Array}
 */
const nato = (letter) => {
  nato_text = [];
  if (letter === " ") {
    nato_text.push("$");
  } else {
    for (let key in nato_alphabet) {
      if (key === letter) {
        nato_text.push(nato_alphabet[key]);
      }
    }
  }
  return nato_text;
};

/**
 * This function takes in an array of characters and returns back
 * the fully processed encoded version of it as a string.
 *
 * @param {Array} chars
 * @returns {String}
 */
const parse_data = (chars) => {
  const nato_text = [];
  chars.forEach((char) => {
    nato_text.push(nato(char.toLowerCase()));
  });
  return nato_text.reverse().join("");
};

/**
 * This function takes in an array of encrypted characters and returns back the
 * deprected string version.
 *
 * @param {Array} chars
 * @returns {String}
 */
const hash_data = (chars) => {
  let letter = "";
  let word = [];
  chars.forEach((char) => {
    letter += char;
    for (let key in nato_alphabet) {
      if (nato_alphabet[key] === letter) {
        word.push(key);
        letter = "";
      }
      if (letter === "$") {
        word.push(" ");
        letter = "";
      }
    }
  });
  return word.reverse().join("");
};

/**
 * Natocrypt Class has two methods; encrypt and decrypt.
 */
class Natocrypt {
  /**
   * Encrypt method takes in a string of characters and returns back an encrypted string.
   *
   * @param {String} field
   * @returns {String}
   */
  encrypt(field) {
    return parse_data(field.split(""));
  }

  /**
   * Decrypt method takes in an encrypted string and returns it back decrypting it.
   *
   * @param {String} field
   * @returns {String}
   */
  decrypt(field) {
    return hash_data(field.split(""));
  }
}

module.exports = Natocrypt;
