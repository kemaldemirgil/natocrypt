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

class Natocrypt {
  encrypt(field) {
    const character_list = field.split("");
    const nato_text = [];
    character_list.forEach((char) => {
      nato_text.push(nato(char.toLowerCase()));
    });
    const encrypted_text = nato_text.reverse().join("");
    return encrypted_text;
  }

  decrypt(field) {
    const character_list = field.split("");
    let letter = "";
    let word = [];
    character_list.forEach((char) => {
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
    const decrypted_text = word.reverse().join("");
    return decrypted_text;
  }
}

module.exports = Natocrypt;
