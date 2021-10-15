let { nato_alphabet, nato_characters } = require("./utils/nato");

/**
 * This function takes in a character and returns
 * back the nato alphabet representation.
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
const parse_data = (chars, multiplier) => {
  const nato_text = [];
  chars.forEach((char) => {
    for (let i = 0; i < multiplier; i++) {
      let random_nato =
        nato_characters[Math.floor(Math.random() * nato_characters.length)];
      nato_text.push(random_nato);
    }
    nato_text.push(nato(char.toLowerCase()));
  });
  return nato_text.join("");
};

/**
 * This function takes in an array of encrypted characters and returns back the
 * deprected string version.
 *
 * @param {Array} chars
 * @returns {String}
 */
const hash_data = (chars, multiplier) => {
  let letter = "";
  let word = [];
  for (let q = 0; q < chars.length; q++) {
    letter += chars[q];
    for (let i = 0; i < nato_characters.length; i++) {
      if (nato_characters[i] === letter) {
        word.push(letter);
        letter = "";
      }
      if (letter === "$") {
        word.push(" ");
        letter = "";
      }
    }
  }

  let final_word = [];
  for (let p = 0; p < word.length; p++) {
    p = p + multiplier;
    final_word.push(word[p]);
  }

  let word2 = [];
  final_word.forEach((char) => {
    word2.push(char.charAt(0));
  });

  return word2.join("");
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
  encrypt(field, multiplier) {
    return parse_data(field.split(""), multiplier);
  }

  /**
   * Decrypt method takes in an encrypted string and returns it back decrypting it.
   *
   * @param {String} field
   * @returns {String}
   */
  decrypt(field, multiplier) {
    return hash_data(field.split(""), multiplier);
  }
}

module.exports = Natocrypt;
