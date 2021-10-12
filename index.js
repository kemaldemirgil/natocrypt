const nato_alphabet = require("./utils/nato");

const natocrypt = (settings) => {
  switch (settings.mode) {
    case "encrypt":
      return nato_encrypt(settings.text);
    case "decrypt":
      return nato_decrypt(settings.text);
    default:
      return "sorry";
  }
};

const nato_encrypt = (text) => {
  const character_list = text.split("");
  const nato_text = [];
  character_list.forEach((char) => {
    nato_text.push(nato(char.toLowerCase()));
  });
  const xx = nato_text.join("");
  return xx;
};

const nato_decrypt = (text) => {
  const character_list = text.split("");
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
  const xx = word.join("");
  return xx;
};

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

module.exports = natocrypt;
