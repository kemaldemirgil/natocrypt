const Natocrypt = require("./index");
let {nato_characters} = require("./utils/nato")

const nato = new Natocrypt();

test("encryption is successful", () => {
  let x = nato.encrypt("hello gameface", 200)
  nato_characters.forEach(char => {
    expect(x).toContain(char)
  });
  expect(x).not.toBeNull();
});

test("decryption is successful", () => {
  let x = nato.encrypt("hello gameface", 200)

  expect(
    nato.decrypt(x, 200)
  ).toBe("hello gameface");
});
