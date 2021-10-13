const nato_alphabet = require("./utils/nato");

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

const parse_data = (chars) => {
  const nato_text = [];
  chars.forEach((char) => {
    nato_text.push(nato(char.toLowerCase()));
  });
  return nato_text.reverse().join("");
};

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

class Natocrypt {
  encrypt(field) {
    return parse_data(field.split(""));
  }

  decrypt(field) {
    return hash_data(field.split(""));
  }
}

module.exports = Natocrypt;
