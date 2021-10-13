const Natocrypt = require("./index");

const nato = new Natocrypt();

test("encryption is successful", () => {
  expect(nato.encrypt("very secret text")).toBe(
    "tangoxrayechotango$tangoechoromeocharlieechosierra$yankeeromeoechoviktor"
  );
});

test("decryption is successful", () => {
  expect(
    nato.decrypt(
      "tangoxrayechotango$tangoechoromeocharlieechosierra$yankeeromeoechoviktor"
    )
  ).toBe("very secret text");
});
