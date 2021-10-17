const Natocrypt = require("./index");
let { nato_alphabet_list, nato_characters } = require("./utils/nato");

const nato = new Natocrypt();
let encrypted_text = nato.encrypt("h3lL0 g4m3f4c3!", 200);

test("encryption successful", () => {
  nato_alphabet_list.forEach((char) => {
    expect(encrypted_text.field).toContain(char);
  });
  expect(encrypted_text.field).not.toBeNull();
});

test("decryption successful", () => {
  expect(nato.decrypt(encrypted_text)).toBe("h3lL0 g4m3f4c3!");
});

test("comparison successful", () => {
  const result = nato.compare("h3lL0 g4m3f4c3!", encrypted_text);
  const result2 = nato.compare("something else", encrypted_text);
  expect(result).toBe(true);
  expect(result2).toBe(false);
});

test("auto generated multiplier successful", () => {
  let encrypted_text = nato.encrypt("h3lL0 g4m3f4c3!");
  nato_alphabet_list.forEach((char) => {
    expect(encrypted_text.field).toContain(char);
  });
  expect(encrypted_text.field).not.toBeNull();
});

test("character registration successful", () => {
  let encrypted_test_string = nato.encrypt(
    "1234567890-=,./;'`[]<>?:{}!@#$%^&*()_+qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
  );
  for (let key in nato_characters) {
    expect(encrypted_test_string.field).toContain(nato_characters[key]);
  }
  expect(encrypted_test_string.field).not.toBeNull();
});
