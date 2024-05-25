// ЗАДАНИЕ: 1
// import { Mystring } from "../src/myString";

// it("Mystring", () => {
//   const string = new Mystring("Kamran");
//   expect(string.remove(1)).toBe("amran");
// });
// -----------------------------------------
// ЗАДАНИЕ: 2
// import { InsertMethod } from "../src/insert-method";
// it("InsertMethod", () => {
//   const string = new InsertMethod(0, "world");
//   expect(string.insert(0, "d")).toBe("dworld");
// });
// -----------------------------------------
// ЗАДАНИЕ: 3
// import { TrimMethod } from "../src/trim-method";
// it("TrimMethod", () => {
//   const string = new TrimMethod("wwoorld");
//   expect(string.trimSign()).toBe("world");
// });
// ----------------------------------------------
// ЗАДАНИЕ: 4
// import { ToggleMethod } from "../src/toggle-method";

// it("ToggleMethod", () => {
//   const string = new ToggleMethod("world");
//   expect(string.toggle()).toBe("WORLD");
// });
// --------------------------------------------
// ЗАДАНИЕ: 5
// import { CounterMethod } from "../src/counter-method";

// it("CounterMethod", () => {
//   const string = new CounterMethod("Kamran");
//   expect(string.counter("a")).toBe(2);
// });
// =============================================
// ЗАДАНИЕ С ВРЕМЕНАМИ
// ЗАДАНИЕ: 2
// import { IsFutureMethod } from "../src/isFuture-method";
// it("IsFutureMethod", () => {
//   const futureDate = new IsFutureMethod("2022-01-01");
//   expect(futureDate.isFuture()).toBe(true);
// });
// ---------------------------------------
// ЗАДАНИЕ: 4
import { NextDayMethod } from "../src/nextDAY-method";

it("NextDayMethod", () => {
  const resultNextDate = new NextDayMethod(25);
  expect(resultNextDate.nextDay()).toBe(26);
});
