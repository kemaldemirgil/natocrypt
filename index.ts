let { nato_alphabet_list, nato_characters } = require("./utils/nato");

/**
 * This function takes in a character and returns
 * back the nato alphabet representation.
 *
 * @param {String} letter
 * @returns {Array}
 */
const nato = (letter: string) => {
  const nato_text: string[] = [];
  if (letter === " ") {
    nato_text.push("~");
  } else {
    for (let key in nato_characters) {
      if (key == letter) {
        nato_text.push(nato_characters[key]);
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
const parse_data = (chars: string[], multiplier: number) => {
  const nato_text: string[] = [];
  chars.forEach((char) => {
    for (let i = 0; i < multiplier; i++) {
      let random_nato =
        nato_alphabet_list[
          Math.floor(Math.random() * nato_alphabet_list.length)
        ];
      nato_text.push(random_nato);
    }
    let char_list = nato(char);
    char_list.forEach((element: string) => {
      nato_text.push(element);
    });
  });
  const field = nato_text.join("");
  const parsed_data = {
    field: field,
    multiplier: multiplier,
  };
  return parsed_data;
};

/**
 * This function takes in a fully encrypted text and returns back the nato representation.
 *
 * @param {String} chars
 * @returns {String}
 */

const get_characters = (chars: string[]) => {
  let letter = "";
  let word = [];
  for (let q = 0; q < chars.length; q++) {
    letter += chars[q];
    for (let key in nato_characters) {
      if (nato_characters[key] == letter) {
        word.push(nato_characters[key]);
        letter = "";
      }
      if (letter === "~") {
        word.push(" ");
        letter = "";
      }
    }
  }
  return word;
};

/**
 * This function takes in an array and returns back the first letter of each word.
 *
 * @param {Array} words
 * @returns {String}
 */

const build_string = (words: string[]) => {
  let final_words: string[] = [];
  words.forEach((char) => {
    final_words.push(char.charAt(0));
  });
  return final_words.join("");
};

/**
 * This function takes in an array of nato decrypted words and multiplies with the multiplier.
 *
 * @param {Array} words
 * @param {Number} multiplier
 * @returns {String}
 */

const final_string = (words: string[], multiplier: number) => {
  let final_words = [];
  for (let p = 0; p < words.length; p++) {
    p = p + multiplier;
    final_words.push(words[p]);
  }
  return final_words;
};

/**
 * This function takes in an array of encrypted characters and returns back the
 * deprected string version.
 *
 * @param {Array} chars
 * @returns {String}
 */
const hash_data = (chars: string, multiplier: number) => {
  const char_list: string[] = chars.split("");
  let words = get_characters(char_list);
  let final_words = final_string(words, multiplier);
  return build_string(final_words);
};

/**
 * This function generates a random multiplier value between the givin min and max values.
 *
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */

const random_multiplier = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Hash {
  field: string;
  multiplier: number;
}

/**
 * Natocrypt Class has two methods; encrypt and decrypt.
 */
class Natocrypt {
  /**
   * Encrypt method takes in a string of characters and returns back an encrypted string.
   *
   * @param {String} field
   * @param {Number} multiplier
   * @returns {Object}
   */
  encrypt(field: string, multiplier: number = random_multiplier(3, 100)) {
    return parse_data(field.split(""), multiplier);
  }

  /**
   * Decrypt method takes in an encrypted object and returns back a decrypted string.
   *
   * @param {Object}
   * @returns {String}
   */
  decrypt(hash: Hash) {
    return hash_data(hash.field, hash.multiplier);
  }

  /**
   * Compare method takes in a text and compares it with the hash. Returns Boolean depending on the matching result.
   *
   * @param {String} plain_text
   * @param {String} hash
   * @returns {Boolean}
   */
  compare(plain_text: string, hash: Hash) {
    return plain_text === hash_data(hash.field, hash.multiplier);
  }
}

module.exports = Natocrypt;