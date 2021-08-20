const { expect } = require("@jest/globals");
const { stateAge, addUser, addColor } = require("./functions");

test('should return a string that says "i am {age}"', () => {
  expect(stateAge(37)).toBe("i am 37");
});

// test("Should return a created status", () => {
//   expect(addUser("Joey", 29)).toStrictEqual({ name: "Joey", age: 29 });
//   expect(addUser("Chandler", 21)).toBe("User not old enough");
// });

// test("Should add a color to the array", () => {
//   expect(addColor("Purple")).toStrictEqual(["red", "white", "blue", "purple"]);
// });
