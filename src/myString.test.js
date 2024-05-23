import { Mystring } from "../myString";

it("Mystring", () => {
  const string = new Mystring("Kamran");
  expect(string.remove(0)).toBe("amran");
});
