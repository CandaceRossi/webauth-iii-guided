const { validateUser } = require("./users-helpers.js");

describe("users helpers", () => {
  describe("validateUser()", () => {
    test("should fail when missing username and password", () => {
      //arrange: set up the world for test
      const invalidUser = {};
      const expected = false;
      //act: execute the system under test (SUT) => validateUser method
      const actual = validateUser(invalidUser);
      //assert: check the result
      expect(actual.isSuccessful).toBe(expected); //matchers
    });
    test("should fail if missing password", () => {
      expect(validateUser({ username: "somebody" })).isSuccessful.toBe(false);
    });
  });
});
