import { maskValue } from "../lib/masker.js";


// ------------ CUSTOM MASK -----------------------------------------------------------
/**
 * Tests the maskValue function with the custom mask attr value being "99/99/9999"
 */
test("maskValue with date", () => {
    // Receive only numbers
    expect(maskValue("99/99/9999", "122")).toBe("12/2");

    // Receive numbers and the trailing slash
    expect(maskValue("99/99/9999", "12/")).toBe("12//");
    // Receive a number after the trailing slash
    expect(maskValue("99/99/9999", "12//2")).toBe("12/2");
    
    expect(maskValue("99/99/9999", "12/2")).toBe("12/2");
    
    // Receive a number in the position where should be the slash
    expect(maskValue("99/99/9999", "12/234")).toBe("12/23/4");

    // Pass the second trailing slash
    expect(maskValue("99/99/9999", "12/23/4")).toBe("12/23/4");

    // Pass a letter after the second trailing slash
    expect(maskValue("99/99/9999", "12/23/a")).toBe("12/23/");

    // Pass an extra number after the input value has reached the char limit
    expect(maskValue("99/99/9999", "12/23/20245")).toBe("12/23/2024");

    // Empty input value
    expect(maskValue("99/99/9999", "")).toBe("");
});







// ------------ MASK NAME -----------------------------------------------------------
/**
 * Tests the maskValue function with the mask attr value being "date"
 */
test("maskValue passing 'date' as mask name", () => {
    // Receive only numbers
    expect(maskValue("date", "122")).toBe("12/2");

    // Receive numbers and the trailing slash
    expect(maskValue("date", "12/")).toBe("12//");
    // Receive a number after the trailing slash
    expect(maskValue("date", "12//2")).toBe("12/2");
    
    expect(maskValue("date", "12/2")).toBe("12/2");
    
    // Receive a number in the position where should be the slash
    expect(maskValue("date", "12/234")).toBe("12/23/4");

    // Pass the second trailing slash
    expect(maskValue("date", "12/23/4")).toBe("12/23/4");

    // Pass a letter after the second trailing slash
    expect(maskValue("date", "12/23/a")).toBe("12/23/");

    // Pass an extra number after the input value has reached the char limit
    expect(maskValue("date", "12/23/20245")).toBe("12/23/2024");

    // Empty input value
    expect(maskValue("date", "")).toBe("");
});
/**
 * Tests the maskValue function with the mask attr value being "date-month"
 */
test("maskValue passing 'date-month' as mask name", () => {
    expect(maskValue("date-month", "1")).toBe("1");
    expect(maskValue("date-month", "12")).toBe("12");
    expect(maskValue("date-month", "122")).toBe("12/2");

    expect(maskValue("date-month", "12/")).toBe("12//");
    expect(maskValue("date-month", "12/2")).toBe("12/2");
    
    expect(maskValue("date-month", "12/234")).toBe("12/23");

    // Empty input value
    expect(maskValue("date-month", "")).toBe("");
});

/**
 * Tests the maskValue function with the mask attr value being "month-year"
 */
test("maskValue passing 'month-year' as mask name", () => {
    expect(maskValue("month-year", "1")).toBe("1");
    expect(maskValue("month-year", "12")).toBe("12");
    expect(maskValue("month-year", "122")).toBe("12/2");

    expect(maskValue("month-year", "12/")).toBe("12//");
    expect(maskValue("month-year", "12/2")).toBe("12/2");
    
    expect(maskValue("month-year", "12/234")).toBe("12/234");
    expect(maskValue("month-year", "12/2345")).toBe("12/2345");
    expect(maskValue("month-year", "12/23456")).toBe("12/2345");

    // Empty input value
    expect(maskValue("month-year", "")).toBe("");
});

// ------------ REGEX -----------------------------------------------------------