// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║           JAVASCRIPT COMPLETE LEARNING HANDBOOK                             ║
// ║           Generated from Your Uploaded Source Files                         ║
// ║                                                                              ║
// ║  Topics Covered:                                                             ║
// ║    01. Variables (let, const, var)                                          ║
// ║    02. Data Types (number, string, boolean, null, undefined)                ║
// ║    03. Type Conversion (explicit & implicit)                                ║
// ║    04. Operators (arithmetic, comparison, logical, ternary)                 ║
// ║    05. Conditionals (if/else, switch, ternary)                              ║
// ║    06. Loops (for, while, do-while, for-of, for-in)                        ║
// ║    07. Functions (declaration, expression, arrow, scope)                    ║
// ║    08. Arrays (creation, mutation, iteration, methods)                      ║
// ║    09. Objects (creation, access, methods, destructuring)                   ║
// ║    10. Strings & String Methods                                              ║
// ║    11. Modern Array Methods (map, filter, reduce, find, sort)               ║
// ║    12. Template Literals (deep dive)                                        ║
// ║    13. DOM Basics (browser-only reference)                                  ║
// ║    14. Mini Projects & Exercises                                            ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                          TABLE OF CONTENTS                                  │
├────┬────────────────────────────────────────┬─────────────────────────────┤
│ #  │ Topic                                  │ Key Concepts                │
├────┼────────────────────────────────────────┼─────────────────────────────┤
│ 01 │ Variables                              │ let, const, var, naming     │
│ 02 │ Data Types                             │ primitives, typeof, quirks  │
│ 03 │ Type Conversion                        │ Number(), Boolean(), coerce │
│ 04 │ Operators                              │ arithmetic, logical, ternary│
│ 05 │ Conditionals                           │ if/else, switch, falsy/truth│
│ 06 │ Loops                                  │ for, while, break, continue │
│ 07 │ Functions                              │ declaration, arrow, scope   │
│ 08 │ Arrays                                 │ CRUD, methods, 2D arrays    │
│ 09 │ Objects                                │ key-value, methods, 'this'  │
│ 10 │ Strings & Methods                      │ immutability, search, slice │
│ 11 │ Modern Array Methods                   │ map, filter, reduce, chain  │
│ 12 │ Template Literals                      │ embedding, multiline, HTML  │
│ 13 │ DOM Basics (reference)                 │ selectors, events, styles   │
│ 14 │ Mini Projects & Exercises              │ game, receipt, report card  │
└────┴────────────────────────────────────────┴─────────────────────────────┘
*/

"use strict"; // Always use strict mode in real projects — catches common mistakes early




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 01 — VARIABLES
//  What    : Named containers that store data values.
//  Why     : Without variables, you'd have no way to remember, reuse, or
//             change values. Every useful program depends on them.
//  When    : Every time you need to store a value — user input, results of
//             calculations, configuration settings, counters, flags, etc.
//  When NOT: You don't "avoid" variables, but avoid GLOBAL variables for
//             everything — keep scope as narrow as possible.
//
// ══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// CORE SYNTAX
// ─────────────────────────────────────────────

/*
  Keyword  │ Reassignable │ Block-scoped │ Hoisted │ Use it when...
  ─────────┼──────────────┼─────────────┼─────────┼─────────────────────────
  const    │ ✗ No         │ ✓ Yes       │ ✗ No    │ DEFAULT choice. Value won't change.
  let      │ ✓ Yes        │ ✓ Yes       │ ✗ No    │ Value needs to change (counters, flags).
  var      │ ✓ Yes        │ ✗ No (func) │ ✓ Yes   │ AVOID. Legacy code only.
*/

// ─────────────────────────────────────────────
// EXAMPLE 1 — let (mutable variable)
// ─────────────────────────────────────────────
let age = 20;
console.log("Age:", age);          // Age: 20

age = 21;                          // Reassigning is fine with `let`
console.log("Updated age:", age);  // Updated age: 21

// ─────────────────────────────────────────────
// EXAMPLE 2 — const (immutable binding)
// ─────────────────────────────────────────────
const PI = 3.14159;
console.log("PI:", PI);            // PI: 3.14159
// PI = 3;                         // ❌ TypeError: Assignment to constant variable

// IMPORTANT NUANCE: const prevents REASSIGNMENT, not mutation!
const colorList = ["red", "blue"]; // const binding
colorList.push("green");           // ✅ This is allowed — you're mutating the array
console.log(colorList);            // ["red", "blue", "green"]
// colorList = ["orange"];         // ❌ This is NOT allowed — reassigning the variable

// ─────────────────────────────────────────────
// EXAMPLE 3 — Naming Conventions
// ─────────────────────────────────────────────

// camelCase — for regular variables and functions (standard JS convention)
let firstName    = "Arjun";
let totalScore   = 95;
let isLoggedIn   = true;
let productPrice = 499.99;

// SCREAMING_SNAKE_CASE — for constants that are truly fixed app-wide values
const MAX_RETRY_COUNT = 3;
const APP_VERSION     = "1.0.0";
const API_BASE_URL    = "https://api.example.com";

// PascalCase — for Classes and constructor functions (see OOP topics)
// class UserAccount { ... }

console.log(firstName, totalScore, isLoggedIn, productPrice);
// Arjun 95 true 499.99

// ─────────────────────────────────────────────
// EXAMPLE 4 — Multiple declarations
// ─────────────────────────────────────────────
let x = 10, y = 20, z = 30;       // Allowed, but can hurt readability
console.log(x, y, z);             // 10 20 30

// Prefer one declaration per line for clarity:
const MAX_SPEED  = 120;
const APP_NAME   = "MyApp";
const DEBUG_MODE = false;
console.log(MAX_SPEED, APP_NAME, DEBUG_MODE); // 120 MyApp false

// ─────────────────────────────────────────────
// EXAMPLE 5 — Swap two values (classic interview pattern)
// ─────────────────────────────────────────────

// Method A: Using a temporary variable
let a = 5, b = 10;
let temp = a;
a = b;
b = temp;
console.log("Swap (temp var) — a:", a, "b:", b); // a: 10 b: 5

// Method B: Destructuring swap (ES6+, modern & concise)
let m = 100, n = 200;
[m, n] = [n, m];
console.log("Swap (destructure) — m:", m, "n:", n); // m: 200 n: 100

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Using a variable before declaring it (with let/const)
// console.log(myName); // ReferenceError: Cannot access 'myName' before initialization
// let myName = "Sam";  // TDZ (Temporal Dead Zone) — let/const are NOT hoisted safely

// ✅ FIX: Always declare first
let myName = "Sam";
console.log(myName);  // Sam

// ❌ MISTAKE 2: Using var and getting confused by hoisting
// console.log(hoisted); // undefined — var IS hoisted but value isn't!
// var hoisted = "oops";

// ❌ MISTAKE 3: Reassigning a const
// const city = "Delhi";
// city = "Mumbai"; // TypeError

// ✅ FIX: Use let if the value changes
let city = "Delhi";
city = "Mumbai";
console.log(city);  // Mumbai

// ─────────────────────────────────────────────
// EDGE CASES
// ─────────────────────────────────────────────

// var is FUNCTION-scoped, not block-scoped — a major source of bugs:
function varScopeDemo() {
    if (true) {
        var insideIf  = "I'm var — I leak out of the block!";
        let insideLet = "I'm let — I stay inside the block.";
    }
    console.log(insideIf);    // Works! var leaked out of the `if` block
    // console.log(insideLet); // ❌ ReferenceError — let is block-scoped
}
varScopeDemo();

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What's the difference between let, const, and var?
  A:  var  → function-scoped, hoisted, can redeclare. Avoid it.
      let  → block-scoped, not hoisted safely, can reassign. Use for mutable values.
      const → block-scoped, not hoisted safely, cannot reassign binding. Use by default.

  Q2: What is hoisting?
  A:  var declarations (not values) are moved to the top of their scope. let/const are
      in a "temporal dead zone" until their declaration line is reached.

  Q3: Can you modify a const object/array?
  A:  Yes! const prevents reassigning the variable, not mutating the object/array.
      Use Object.freeze() if you truly need immutability:
        const frozen = Object.freeze({ x: 1 });
        frozen.x = 99; // Silently fails in non-strict mode, throws in strict

  Q4: Why should we prefer const by default?
  A:  It signals intent — this value isn't supposed to change. Code is easier to
      reason about because you know the binding will always point to the same thing.
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Student profile
const studentName = "Riya";
let   studentAge  = 22;
const studentCity = "Mumbai";
let   hasPassed   = true;
console.log("\n[Task 1]", studentName, studentAge, studentCity, hasPassed);
// Riya 22 Mumbai true

// Task 2 — Calculate total price with tax
const itemPrice  = 250;
const quantity   = 4;
const taxRate    = 0.18; // 18% GST
let   subtotal   = itemPrice * quantity;
let   tax        = subtotal * taxRate;
let   totalPrice = subtotal + tax;
console.log(`[Task 2] Subtotal: ${subtotal}, Tax: ${tax}, Total: ${totalPrice}`);
// Subtotal: 1000, Tax: 180, Total: 1180

// Task 3 — Real-world: e-commerce cart item
const cartItem = {
    id:       "SKU-001",
    product:  "Wireless Earbuds",
    quantity: 2,
    unitPrice: 1299
};
let cartTotal = cartItem.quantity * cartItem.unitPrice;
console.log(`[Task 3] ${cartItem.product} × ${cartItem.quantity} = Rs.${cartTotal}`);
// Wireless Earbuds × 2 = Rs.2598




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 02 — DATA TYPES
//  What    : The categories of data that JavaScript understands.
//  Why     : JS is dynamically typed — the same variable can hold any type.
//             Understanding types prevents bugs (especially with type coercion).
//  When    : You're dealing with types constantly — when validating input, doing
//             arithmetic, comparing values, or checking for null/undefined.
//  When NOT: You can't avoid types; you can only understand them better.
//
// ══════════════════════════════════════════════════════════════════════════════

/*
  JavaScript Types at a Glance:

  PRIMITIVE (immutable, stored by value):
    number     → 42, 3.14, -5, Infinity, NaN
    string     → "hello", 'world', `template`
    boolean    → true, false
    null       → explicitly empty (intentional absence)
    undefined  → declared but not yet assigned
    bigint     → 9007199254740993n  (very large integers)
    symbol     → Symbol("id")       (unique identifiers — advanced)

  REFERENCE (mutable, stored by reference):
    object     → { key: value }
    array      → [1, 2, 3]  (technically a special object)
    function   → function() {}  (also technically an object)
*/

// ─────────────────────────────────────────────
// EXAMPLE 1 — Number
// ─────────────────────────────────────────────
let score   = 100;
let price   = 49.99;
let negTemp = -5;

console.log(typeof score);   // "number"  (integers and floats are the SAME type)
console.log(typeof price);   // "number"
console.log(score + price);  // 149.99

// Special number values — very important to know!
console.log(10 / 0);         // Infinity     (no error — JS returns Infinity)
console.log(-10 / 0);        // -Infinity
console.log(0 / 0);          // NaN          (Not a Number — result of invalid math)
console.log("abc" * 2);      // NaN
console.log(NaN === NaN);    // false!       NaN is the ONLY value not equal to itself
console.log(isNaN(NaN));     // true         ← use isNaN() to check for NaN
console.log(Number.isNaN(NaN)); // true      ← Number.isNaN() is more precise (preferred)

// Number precision (floating point): a common interview topic
console.log(0.1 + 0.2);             // 0.30000000000000004 — floating point issue!
console.log((0.1 + 0.2).toFixed(1)); // "0.3" — fix with toFixed()

// Safe integer range
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)

// ─────────────────────────────────────────────
// EXAMPLE 2 — String
// ─────────────────────────────────────────────
let singleQ  = 'Hello';
let doubleQ  = "World";
let template = `JavaScript`;  // Preferred for embedding variables

console.log(singleQ.length);            // 5
console.log(doubleQ.toUpperCase());     // WORLD
console.log(singleQ + " " + doubleQ);  // Hello World (concatenation)

// Strings are immutable — you can READ characters but not modify them
let word = "hello";
// word[0] = "H"; // Silently fails (or throws in strict mode for some engines)
word = "H" + word.slice(1); // ✅ Create a new string
console.log(word); // Hello

// ─────────────────────────────────────────────
// EXAMPLE 3 — Boolean
// ─────────────────────────────────────────────
let isActive = true;
let isEmpty  = false;

console.log(isActive);      // true
console.log(5 > 3);         // true
console.log(10 === 20);     // false
console.log(typeof true);   // "boolean"

// ─────────────────────────────────────────────
// EXAMPLE 4 — null vs undefined (critical distinction!)
// ─────────────────────────────────────────────

// null → YOU explicitly set it to empty. Intentional absence.
let selectedFile = null;
console.log(selectedFile);          // null
console.log(typeof selectedFile);   // "object" ← FAMOUS BUG in JS (not fixable, historical)
console.log(selectedFile === null); // true ← the CORRECT way to check for null

// undefined → JS set it automatically. Variable declared but no value assigned yet.
let userScore;
console.log(userScore);             // undefined
console.log(typeof userScore);      // "undefined"

// Comparison:
console.log(null == undefined);     // true  (loose equality — same "empty" category)
console.log(null === undefined);    // false (strict equality — different types)

// Real-world analogy:
// null      = An empty glass (you intentionally poured it out)
// undefined = A glass that was never filled

// ─────────────────────────────────────────────
// EXAMPLE 5 — typeof operator
// ─────────────────────────────────────────────
console.log(typeof 42);            // "number"
console.log(typeof "hello");       // "string"
console.log(typeof true);          // "boolean"
console.log(typeof null);          // "object"     ← the famous bug
console.log(typeof undefined);     // "undefined"
console.log(typeof function(){}); // "function"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"     ← arrays are objects in JS!
console.log(Array.isArray([]));   // true         ← correct way to check for arrays

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Forgetting quotes on strings
// let nm = Arjun;  // ReferenceError — JS thinks Arjun is a variable name

// ✅ FIX:
let nm = "Arjun";
console.log(nm);  // Arjun

// ❌ MISTAKE 2: Using typeof null to check for null
// typeof null === "object" — this is WRONG (JS bug)

// ✅ FIX: Use strict equality
let val = null;
console.log(val === null);  // true

// ❌ MISTAKE 3: Comparing NaN with ===
console.log(NaN === NaN);      // false — NaN is never equal to itself!
console.log(Number.isNaN(NaN)); // true ← correct

// ─────────────────────────────────────────────
// EDGE CASES
// ─────────────────────────────────────────────

// Floating point precision
console.log(0.1 + 0.2 === 0.3);   // false! (floating point issue)
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true ← correct comparison

// Arrays and objects have type "object"
console.log(typeof []);  // "object"  — use Array.isArray() instead
console.log(typeof {}); // "object"

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What is the difference between null and undefined?
  A:  null      → intentional absence; you set it (e.g., "no user selected").
      undefined → unintentional absence; JS set it (variable declared, no value).

  Q2: Why does typeof null return "object"?
  A:  It's a bug from JavaScript's very first version (1995). Fixing it would break
      millions of existing websites, so it was kept as-is. Always use === null.

  Q3: How many primitive types are in JavaScript?
  A:  7: number, string, boolean, null, undefined, bigint, symbol.

  Q4: What is NaN and how do you check for it?
  A:  NaN = "Not a Number". It's the result of invalid arithmetic (like "abc" * 2).
      The quirk: NaN === NaN is false. Use Number.isNaN(value) to detect it.

  Q5: Is an array an object in JavaScript?
  A:  Yes. Arrays are a specialized form of object. Use Array.isArray() to distinguish.
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Identify types with explanations
const typeTests = [42, "hello", true, null, undefined, [], {}, NaN];
typeTests.forEach(val2 => {
    const display = JSON.stringify(val2) ?? String(val2);
    console.log(`[Task 1] typeof ${display} → "${typeof val2}"`);
});

// Task 2 — Product listing with correct types
const productName = "Wireless Earbuds";
const prodPrice   = 1299.99;
const inStock     = true;
let   discount    = null;   // null because no discount is applied yet
let   releaseDate;          // undefined because we haven't set it
console.log(`[Task 2]`, { productName, prodPrice, inStock, discount, releaseDate });

// Task 3 — Type-safe check pattern (real-world pattern)
function describeValue(v) {
    if (v === null)             return "null (intentionally empty)";
    if (v === undefined)        return "undefined (not set)";
    if (Number.isNaN(v))        return "NaN (invalid number result)";
    if (Array.isArray(v))       return `array with ${v.length} items`;
    return `${typeof v}: ${v}`;
}
console.log("[Task 3]", describeValue(null));         // null (intentionally empty)
console.log("[Task 3]", describeValue(undefined));    // undefined (not set)
console.log("[Task 3]", describeValue(NaN));          // NaN (invalid number result)
console.log("[Task 3]", describeValue([1,2,3]));      // array with 3 items
console.log("[Task 3]", describeValue("hello"));      // string: hello




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 03 — TYPE CONVERSION
//  What    : Converting a value from one data type to another.
//  Why     : JS mixes types constantly — user input is always a string, math
//             needs numbers, conditions need booleans. You MUST convert explicitly.
//  When    : Always when processing user input, parsing data from APIs, comparing
//             values of unknown types.
//  When NOT: Don't rely on IMPLICIT conversion (coercion) — it's unpredictable.
//             Always convert explicitly.
//
// ══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// EXPLICIT CONVERSION FUNCTIONS
// ─────────────────────────────────────────────

/*
  Number(value)       → converts to number (strict)
  parseInt(str, base) → parses integer from string (stops at non-digit)
  parseFloat(str)     → parses decimal from string (stops at non-digit)
  String(value)       → converts to string
  value.toString()    → converts to string (can't be called on null/undefined)
  Boolean(value)      → converts to boolean (uses truthy/falsy rules)
*/

// ─────────────────────────────────────────────
// EXAMPLE 1 — Converting TO Number
// ─────────────────────────────────────────────
let str1 = "42";
let num1 = Number(str1);         // "42" → 42
console.log(num1, typeof num1);  // 42 "number"

// parseInt — parses until it hits a non-numeric character
let num2 = parseInt("25px");      // → 25 (stops at "p")
let num3 = parseInt("3.7abc");    // → 3  (integer only!)
let num4 = parseFloat("3.14abc"); // → 3.14 (includes decimals)
let bad  = Number("hello");       // → NaN (can't convert "hello")

console.log(num2, num3, num4, bad); // 25  3  3.14  NaN

// isNaN vs Number.isNaN (important distinction!)
console.log(isNaN("hello"));        // true (converts to number first: NaN)
console.log(isNaN("42"));           // false (converts to 42 first)
console.log(Number.isNaN("hello")); // false (only returns true for actual NaN)
console.log(Number.isNaN(NaN));     // true  ← more precise, use this one

// parseInt base (radix) parameter
console.log(parseInt("ff", 16));  // 255 (hex → decimal)
console.log(parseInt("11", 2));   // 3   (binary → decimal)

// ─────────────────────────────────────────────
// EXAMPLE 2 — Converting TO String
// ─────────────────────────────────────────────
let n1  = 99;
let s1  = String(n1);       // "99"
let s2  = n1.toString();    // "99"
let s3  = n1.toString(2);   // "1100011" (binary representation)
let s4  = n1.toString(16);  // "63" (hex representation)
let s5  = `${n1}`;          // "99" — template literal (often most readable)

console.log(typeof s1, s1); // "string" "99"
console.log(s3, s4);        // "1100011" "63"

// Special: Number formatting
let bigNum = 1234567.89;
console.log(bigNum.toFixed(2));    // "1234567.89" (fixed decimal places)
console.log(bigNum.toLocaleString("en-IN")); // "12,34,567.89" (Indian format)

// ─────────────────────────────────────────────
// EXAMPLE 3 — Converting TO Boolean (Truthy/Falsy — CRITICAL!)
// ─────────────────────────────────────────────

// FALSY values — these 6 values convert to false. Memorize them!
console.log("--- Falsy values ---");
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(""));        // false  (empty string)
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(false));     // false (obviously)

// TRUTHY values — everything ELSE is truthy (there are many surprises!)
console.log("--- Truthy values (surprises!) ---");
console.log(Boolean(1));          // true  (any non-zero number)
console.log(Boolean(-1));         // true  (negative numbers too!)
console.log(Boolean("0"));        // true  ← "0" is a non-empty string!
console.log(Boolean("false"));    // true  ← the STRING "false" is truthy!
console.log(Boolean([]));         // true  ← empty array is truthy!
console.log(Boolean({}));         // true  ← empty object is truthy!
console.log(Boolean(Infinity));   // true

// ─────────────────────────────────────────────
// EXAMPLE 4 — Implicit (Automatic) Coercion — the tricky part
// ─────────────────────────────────────────────
console.log("--- Implicit coercion ---");
console.log("5" + 3);    // "53"  ← + with string → CONCATENATION (string wins)
console.log("5" - 3);    // 2     ← - forces NUMERIC conversion
console.log("6" * 2);    // 12    ← * forces NUMERIC conversion
console.log("10" / 2);   // 5     ← / forces NUMERIC conversion
console.log("3" ** 2);   // 9     ← ** forces NUMERIC conversion
console.log(true + 1);   // 2     ← true converts to 1
console.log(false + 1);  // 1     ← false converts to 0
console.log(null + 1);   // 1     ← null converts to 0
console.log(undefined + 1); // NaN ← undefined converts to NaN

// ─────────────────────────────────────────────
// EXAMPLE 5 — == (loose) vs === (strict) — The Coercion Trap
// ─────────────────────────────────────────────
console.log("--- == vs === ---");
console.log(0 == false);    // true  ← both convert to 0 (misleading!)
console.log(0 === false);   // false ← different types (correct behavior)
console.log("" == false);   // true  ← both are falsy (misleading!)
console.log("" === false);  // false ← different types
console.log(null == undefined);  // true  (special rule)
console.log(null === undefined); // false
console.log(1 == "1");     // true  ← string converted to number
console.log(1 === "1");    // false ← no conversion

// RULE: Always use === unless you have a specific reason to use ==
// The only acceptable use of == is: value == null (catches both null AND undefined)

// ─────────────────────────────────────────────
// REAL-WORLD PATTERN: Handling user input
// ─────────────────────────────────────────────

// prompt() in a browser always returns a string — you MUST convert!
function processUserAge(rawInput) {
    // rawInput might be "25" (string from prompt/form)
    const numericAge = Number(rawInput);

    if (Number.isNaN(numericAge)) {
        return "Invalid: please enter a number";
    }
    if (numericAge < 0 || numericAge > 120) {
        return "Invalid: age out of realistic range";
    }
    return `Valid age: ${numericAge}`;
}

console.log(processUserAge("25"));    // Valid age: 25
console.log(processUserAge("abc"));   // Invalid: please enter a number
console.log(processUserAge("-5"));    // Invalid: age out of realistic range
console.log(processUserAge("150"));   // Invalid: age out of realistic range

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Adding numbers from prompt without converting
// let age = prompt("age:");
// console.log(age + 1);  // "211" if user typed 21 — string concatenation!
// ✅ FIX: let age = Number(prompt("age:")); then age + 1 = 22

// ❌ MISTAKE 2: Forgetting that "0" is truthy
// if ("0") console.log("This WILL run"); // "0" is a non-empty string!

// ❌ MISTAKE 3: parseInt without radix on strings starting with 0
// parseInt("010") might return 8 (octal) in some older environments
// ✅ FIX: Always provide radix: parseInt("010", 10) → 10

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What are the 6 falsy values in JavaScript?
  A:  false, 0, "" (empty string), null, undefined, NaN

  Q2: What is the difference between == and ===?
  A:  == (loose equality) converts types before comparing (coercion).
      === (strict equality) checks type AND value — never converts.
      Always use === for predictable comparisons.

  Q3: What does Number("") return?
  A:  0. Empty string converts to 0, which can be surprising.

  Q4: What is the difference between isNaN() and Number.isNaN()?
  A:  isNaN() converts its argument to number first, then checks.
        isNaN("hello") → true (converts "hello" to NaN, then checks)
        isNaN("42") → false (converts "42" to 42, then checks)
      Number.isNaN() does NOT convert — only returns true for actual NaN.
        Number.isNaN("hello") → false (it's not the NaN value)
        Number.isNaN(NaN) → true

  Q5: What is the result of: 1 + "2" + 3?
  A:  "123" — JS evaluates left to right. 1 + "2" = "12" (concatenation),
      then "12" + 3 = "123" (concatenation again).
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Convert and add strings from an API response
let apiPrice1 = "100", apiPrice2 = "250.75";
let sumPrices = Number(apiPrice1) + parseFloat(apiPrice2);
console.log(`[Task 1] Sum: Rs.${sumPrices}`); // Sum: Rs.350.75

// Task 2 — Validate and convert form input
function validateAndConvert(input) {
    const num = Number(input);
    return {
        isValid: !Number.isNaN(num) && input.trim() !== "",
        value:   num,
        type:    typeof num
    };
}
console.log("[Task 2]", validateAndConvert("42"));    // { isValid: true, value: 42, ... }
console.log("[Task 2]", validateAndConvert("abc"));   // { isValid: false, ... }
console.log("[Task 2]", validateAndConvert(""));      // { isValid: false, ... }

// Task 3 — List all 6 falsy values with their Boolean conversion
const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(v => {
    console.log(`[Task 3] Boolean(${JSON.stringify(v) ?? "NaN"}) = ${Boolean(v)}`);
});




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 04 — OPERATORS
//  What    : Symbols that perform operations on values (operands).
//  Why     : Operators are the building blocks of all logic and computation.
//  When    : Constantly — math, comparisons, logic, assignment, string building.
//  When NOT: Be careful with loose equality (==) and implicit coercion.
//
// ══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// EXAMPLE 1 — Arithmetic Operators
// ─────────────────────────────────────────────
let p = 10, q = 3;

console.log("--- Arithmetic ---");
console.log(p + q);   // 13  (addition)
console.log(p - q);   // 7   (subtraction)
console.log(p * q);   // 30  (multiplication)
console.log(p / q);   // 3.333... (division — always returns float if needed)
console.log(p % q);   // 1   (modulo — remainder after division)
console.log(p ** q);  // 1000 (exponentiation: 10³)
console.log(Math.floor(p / q)); // 3 (integer division — use Math.floor)

// ─────────────────────────────────────────────
// EXAMPLE 2 — Assignment Operators
// ─────────────────────────────────────────────
let xVal = 10;
console.log("--- Assignment ---");
xVal += 5;   console.log("+=5 :", xVal);  // 15
xVal -= 3;   console.log("-=3 :", xVal);  // 12
xVal *= 2;   console.log("*=2 :", xVal);  // 24
xVal /= 4;   console.log("/=4 :", xVal);  // 6
xVal **= 2;  console.log("**=2:", xVal);  // 36
xVal %= 10;  console.log("%=10:", xVal);  // 6

// Increment / Decrement
let counter = 5;
console.log("i++:", counter++); // 5 — returns THEN increments (post-increment)
console.log("now:", counter);   // 6
console.log("++i:", ++counter); // 7 — increments THEN returns (pre-increment)

// ─────────────────────────────────────────────
// EXAMPLE 3 — Comparison Operators
// ─────────────────────────────────────────────
console.log("--- Comparison ---");
console.log(5 >  3);     // true
console.log(5 <  3);     // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false

// CRITICAL: Use === (strict) not == (loose)
console.log(5 ==  "5");  // true  ← converts "5" to 5 (BAD — unexpected!)
console.log(5 === "5");  // false ← different types (CORRECT behavior)
console.log(5 !== "5");  // true  (strict not-equal)
console.log(5 !=  5);   // false (loose not-equal)
console.log(5 !== 5);   // false (strict not-equal)

// ─────────────────────────────────────────────
// EXAMPLE 4 — Logical Operators
// ─────────────────────────────────────────────
console.log("--- Logical ---");
console.log(true  && true);   // true  (AND: both must be true)
console.log(true  && false);  // false
console.log(false || true);   // true  (OR: at least one must be true)
console.log(false || false);  // false
console.log(!true);           // false (NOT: flips the value)

// Short-circuit evaluation — very useful pattern!
// && returns first FALSY value, or the last value if all truthy
console.log(0 && "hello");       // 0       (0 is falsy — short-circuits)
console.log(1 && "hello");       // "hello" (1 is truthy — evaluates right side)
console.log("a" && "b" && "c"); // "c"     (all truthy — returns last)

// || returns first TRUTHY value, or the last value if all falsy
console.log(0 || "default");     // "default" (0 is falsy — tries right side)
console.log("user" || "guest");  // "user"    (truthy — short-circuits)
console.log(null || undefined || 0 || "found"); // "found"

// Nullish coalescing (??) — only checks for null/undefined (not all falsy!)
let userInput = 0;
console.log(userInput || "default");   // "default" — because 0 is falsy (might not be what you want!)
console.log(userInput ?? "default");   // 0          — because 0 is NOT null/undefined (better!)

// ─────────────────────────────────────────────
// EXAMPLE 5 — Ternary Operator
// ─────────────────────────────────────────────
// Syntax: condition ? valueIfTrue : valueIfFalse

let scoreVal = 75;
let grade    = scoreVal >= 50 ? "Pass" : "Fail";
console.log(grade);  // Pass

let hour      = 14;
let timeGreet = hour < 12 ? "Good morning"
              : hour < 17 ? "Good afternoon"
              :              "Good evening";
console.log(timeGreet);  // Good afternoon

// Ternary for default values
function getUsername(user) {
    return user ? user.name : "Anonymous";
}
console.log(getUsername({ name: "Alice" }));  // Alice
console.log(getUsername(null));               // Anonymous

// ─────────────────────────────────────────────
// EXAMPLE 6 — Optional Chaining (?.) & Nullish Coalescing (??) — ES2020
// ─────────────────────────────────────────────

// Without optional chaining — crashes if user is null/undefined
// const street = user.address.street; // TypeError if user or address is null

// With optional chaining — safely returns undefined instead of crashing
const user1 = { name: "Bob", address: { city: "Delhi" } };
const user2 = null;

console.log(user1?.address?.city);    // "Delhi"
console.log(user2?.address?.city);    // undefined (no crash!)
console.log(user1?.phone?.number);    // undefined (no crash!)

// Combined with ??
const city2 = user1?.address?.city ?? "Unknown City";
console.log(city2);  // "Delhi"

const phone = user1?.phone?.number ?? "No phone on file";
console.log(phone);  // "No phone on file"

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Assignment (=) inside if condition
let num = 5;
// if (num = 10) { ... }  // assigns 10 — condition always true!
// ✅ FIX:
if (num === 10) console.log("ten");
else console.log("not ten");  // not ten

// ❌ MISTAKE 2: Modulo with negative numbers
console.log(-7 % 3);  // -1 in JS (result takes sign of dividend — different from math!)
// ✅ FIX for always-positive modulo:
const trueMod = (n, m) => ((n % m) + m) % m;
console.log(trueMod(-7, 3));  // 2

// ❌ MISTAKE 3: Using || for default values when 0 or "" are valid
let volume = 0;
let display = volume || 100; // ❌ Will show 100 even though 0 is a valid volume
let display2 = volume ?? 100; // ✅ Will show 0 (only falls back on null/undefined)
console.log(display, display2);  // 100  0

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What is the difference between i++ and ++i?
  A:  i++ (post-increment): returns current value, then increments
      ++i (pre-increment): increments first, then returns new value
      let x = 5; let y = x++; → x=6, y=5
      let x = 5; let y = ++x; → x=6, y=6

  Q2: What does the && operator return?
  A:  The first FALSY value it encounters, or the last value if all are truthy.
      Short-circuits (stops evaluating) as soon as a falsy is found.

  Q3: What is the difference between || and ??
  A:  || (OR): returns first truthy value. 0 and "" are falsy, so they get skipped.
      ?? (nullish coalescing): returns first non-null/undefined value. 0 and "" pass through.

  Q4: What is -7 % 3 in JavaScript?
  A:  -1 (JS modulo takes the sign of the dividend, unlike in Python where it's 2).

  Q5: When would you use optional chaining (?.)
  A:  When accessing deeply nested properties that might be null/undefined, like
      API responses where not every field is guaranteed to exist.
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Is a number divisible by 3 AND 5?
let checkNum = 15;
let divisible = checkNum % 3 === 0 && checkNum % 5 === 0;
console.log(`[Task 1] ${checkNum} divisible by 3 & 5: ${divisible}`);  // true

// Task 2 — Can vote? (age >= 18 AND is a citizen)
let voterAge  = 19, isCitizen = true;
let canVote   = voterAge >= 18 && isCitizen;
console.log(`[Task 2] Can vote: ${canVote}`);  // true

// Task 3 — Larger of two numbers
let aa = 42, bb = 87;
let larger = aa > bb ? aa : bb;
console.log(`[Task 3] Larger: ${larger}`);  // 87

// Task 4 — Safe property access from an API
const apiResponse = {
    data: {
        user: null  // user not found
    }
};
const username = apiResponse?.data?.user?.name ?? "Guest";
console.log(`[Task 4] Username: ${username}`);  // Guest




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 05 — CONDITIONALS
//  What    : Statements that make decisions — run different code based on conditions.
//  Why     : Almost all programs need to respond differently to different inputs.
//  When    : Validating input, routing logic, permission checks, game rules, etc.
//  When NOT: Don't use complex nested ternaries for readability — use if/else.
//             Don't use switch for complex boolean logic — use if/else if.
//
// ══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// EXAMPLE 1 — Basic if / else
// ─────────────────────────────────────────────
let personAge = 20;

if (personAge >= 18) {
    console.log("You can vote!");   // Runs because 20 >= 18
} else {
    console.log("Too young to vote.");
}

// ─────────────────────────────────────────────
// EXAMPLE 2 — else if chain
// ─────────────────────────────────────────────
let marks = 75;

if      (marks >= 90) console.log("Grade: A");
else if (marks >= 70) console.log("Grade: B");   // Runs — 75 >= 70
else if (marks >= 50) console.log("Grade: C");
else                  console.log("Grade: F");

// ─────────────────────────────────────────────
// EXAMPLE 3 — Nested if (use sparingly — can get complex!)
// ─────────────────────────────────────────────
let loggedIn = true;
let isAdmin  = false;

if (loggedIn) {
    if (isAdmin) {
        console.log("Welcome, Admin! Full access granted.");
    } else {
        console.log("Welcome, User! Limited access.");  // Runs
    }
} else {
    console.log("Please log in first.");
}

// ─────────────────────────────────────────────
// EXAMPLE 4 — Ternary (for simple, READABLE conditions)
// ─────────────────────────────────────────────
let tempC     = 35;
let weatherMsg = tempC > 30 ? "Hot day! 🌞" : "Nice day! 🌤";
console.log(weatherMsg);  // Hot day! 🌞

// Chained ternary for categories (be careful with readability)
let bmi = 22.9;
let category = bmi < 18.5 ? "Underweight"
             : bmi < 25   ? "Normal weight"
             : bmi < 30   ? "Overweight"
             :               "Obese";
console.log(`BMI: ${bmi} → ${category}`); // Normal weight

// ─────────────────────────────────────────────
// EXAMPLE 5 — switch statement (best for discrete values)
// ─────────────────────────────────────────────
let dayName = "Monday";

switch (dayName) {
    case "Monday":
        console.log("Start of the work week!");
        break;                // ALWAYS add break to prevent fall-through!
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":          // Fall-through: Saturday and Sunday share code
    case "Sunday":
        console.log("Weekend! Time to relax.");
        break;
    default:                  // Runs if no case matches (like else)
        console.log("Regular weekday — heads down!");
}

// switch with expressions (ES2019+ allows richer patterns)
function getDiscount(memberType) {
    switch (memberType) {
        case "gold":     return 0.30;
        case "silver":   return 0.15;
        case "bronze":   return 0.05;
        default:         return 0;
    }
}
console.log(`Gold discount: ${getDiscount("gold") * 100}%`);   // 30%
console.log(`None discount: ${getDiscount("none") * 100}%`);   // 0%

// ─────────────────────────────────────────────
// EXAMPLE 6 — Guard Clauses (professional pattern)
// ─────────────────────────────────────────────
// Instead of deeply nested if/else, return early when conditions aren't met

// ❌ Avoid: Deep nesting
function processOrderBad(order) {
    if (order) {
        if (order.items.length > 0) {
            if (order.total > 0) {
                return "Order processed";
            } else {
                return "Order total must be positive";
            }
        } else {
            return "Order must have items";
        }
    } else {
        return "Order is required";
    }
}

// ✅ Prefer: Guard clauses (early returns)
function processOrder(order) {
    if (!order)                   return "Order is required";
    if (order.items.length === 0) return "Order must have items";
    if (order.total <= 0)         return "Order total must be positive";

    return "Order processed";  // Happy path is obvious and at the end
}

console.log(processOrder(null));                          // Order is required
console.log(processOrder({ items: [], total: 0 }));      // Order must have items
console.log(processOrder({ items: ["book"], total: 0 })); // Order total must be positive
console.log(processOrder({ items: ["book"], total: 250 })); // Order processed

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Assignment (=) inside if instead of comparison (===)
let scoreX = 50;
// if (scoreX = 100) { ... }  // ALWAYS true! Assigns 100, then evaluates 100 (truthy)

// ❌ MISTAKE 2: Missing break in switch (fall-through bug)
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
        // ❌ Missing break — falls through to next case!
    case "banana":
        console.log("Banana selected"); // This ALSO runs!
        break;
}
// Output: "Apple selected" AND "Banana selected" — bug!

// ❌ MISTAKE 3: 0 and "" are falsy — don't check them with if(value)
let itemCount = 0;
if (itemCount) {
    console.log("Has items");     // Won't run — 0 is falsy
} else {
    console.log("No items");      // Runs — but what if 0 is a VALID count?
}
// ✅ FIX: Be explicit
if (itemCount !== null && itemCount !== undefined) {
    console.log(`Count: ${itemCount}`);  // Runs even when count is 0
}

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What is "fall-through" in a switch statement?
  A:  When a case is matched but has no `break`, execution continues into the next
      case(s). Sometimes useful (Saturday/Sunday sharing logic), usually a bug.

  Q2: When should you use switch vs if/else?
  A:  switch: when comparing ONE variable against MANY specific values.
      if/else: when checking ranges, multiple conditions, or complex boolean logic.

  Q3: What are "guard clauses" and why are they preferred?
  A:  Early return statements at the top of a function that handle error/edge cases.
      They reduce nesting, improve readability, and make the "happy path" obvious.

  Q4: How does JavaScript determine if a value is truthy or falsy?
  A:  There are exactly 6 falsy values: false, 0, "", null, undefined, NaN.
      Everything else is truthy, including "0", [], and {}.

  Q5: Can you use a switch statement with non-primitive values?
  A:  Yes, but object/array comparisons use reference equality — comparing {a:1}
      to {a:1} will NOT match because they are different objects.
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Classify a number
function classifyNumber(n) {
    if (n > 0)  return "Positive";
    if (n < 0)  return "Negative";
    return "Zero";
}
console.log(`[Task 1]`, classifyNumber(-4));  // Negative
console.log(`[Task 1]`, classifyNumber(0));   // Zero
console.log(`[Task 1]`, classifyNumber(7));   // Positive

// Task 2 — Ticket pricing by age group
function getTicketPrice(visitorAge) {
    if (visitorAge < 5)   return 0;      // Free for toddlers
    if (visitorAge <= 12) return 100;    // Child price
    if (visitorAge <= 60) return 250;    // Adult price
    return 150;                           // Senior discount
}
console.log(`[Task 2] Age 3: Rs.${getTicketPrice(3)}`);   // Rs.0
console.log(`[Task 2] Age 8: Rs.${getTicketPrice(8)}`);   // Rs.100
console.log(`[Task 2] Age 25: Rs.${getTicketPrice(25)}`); // Rs.250
console.log(`[Task 2] Age 65: Rs.${getTicketPrice(65)}`); // Rs.150

// Task 3 — BMI Calculator
function calculateBMICategory(weightKg, heightM) {
    if (!weightKg || !heightM || heightM <= 0) return "Invalid input";
    const bmi2 = weightKg / (heightM * heightM);
    const cat  = bmi2 < 18.5 ? "Underweight"
               : bmi2 < 25   ? "Normal"
               : bmi2 < 30   ? "Overweight"
               :                "Obese";
    return `BMI: ${bmi2.toFixed(1)} → ${cat}`;
}
console.log(`[Task 3]`, calculateBMICategory(70, 1.75));  // BMI: 22.9 → Normal
console.log(`[Task 3]`, calculateBMICategory(55, 1.70));  // BMI: 19.0 → Normal




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 06 — LOOPS
//  What    : Repeating a block of code multiple times.
//  Why     : Without loops, you'd copy-paste the same code for every item.
//             Loops let you process 5 or 5 million items with the same code.
//  When    : Processing lists, repeating tasks, counting, accumulating values.
//  When NOT: Don't use loops when higher-order functions (map/filter/reduce) are
//             clearer. Don't use loops to process one item at a time that async
//             could handle in parallel.
//
// ══════════════════════════════════════════════════════════════════════════════

/*
  Loop Type    │ Use When
  ─────────────┼──────────────────────────────────────────────────────────
  for          │ You know EXACTLY how many times to loop
  while        │ You loop UNTIL a condition changes (unknown count)
  do...while   │ You need to run the block AT LEAST ONCE before checking
  for...of     │ Iterating over ITEMS in an iterable (array, string, Set, Map)
  for...in     │ Iterating over KEYS of an object (use with caution)
  forEach      │ Iterating array items with index — no break/continue
  map/filter   │ Transforming or filtering — covered in Topic 11
*/

// ─────────────────────────────────────────────
// EXAMPLE 1 — for loop (the classic)
// ─────────────────────────────────────────────
// Anatomy: for (initializer; condition; update)

for (let i = 1; i <= 5; i++) {
    process.stdout.write(i + " ");  // 1 2 3 4 5
}
console.log();

// Step size — even numbers only
for (let i = 2; i <= 10; i += 2) {
    process.stdout.write(i + " ");  // 2 4 6 8 10
}
console.log();

// Counting DOWN
for (let i = 5; i >= 1; i--) {
    process.stdout.write(i + " ");  // 5 4 3 2 1
}
console.log();

// Sum of 1 to 100 (Gauss's problem — also (n*(n+1))/2 = 5050)
let loopSum = 0;
for (let i = 1; i <= 100; i++) loopSum += i;
console.log("Sum 1-100:", loopSum);  // 5050

// ─────────────────────────────────────────────
// EXAMPLE 2 — while loop
// ─────────────────────────────────────────────
// Use when: you don't know upfront how many iterations you need

let countdown = 5;
while (countdown > 0) {
    process.stdout.write(countdown + " ");  // 5 4 3 2 1
    countdown--;
}
console.log("Blast off! 🚀");

// Real-world example: keep asking for input until valid
// (Simulated here — in browser you'd use prompt())
let attempts = 0;
let password  = "";
const correctPwd = "secret123";
const mockInputs  = ["wrong1", "wrong2", "secret123"]; // simulate user inputs

while (password !== correctPwd && attempts < 3) {
    password = mockInputs[attempts];
    attempts++;
    if (password !== correctPwd) {
        console.log(`Attempt ${attempts}: Incorrect password. ${3 - attempts} tries left.`);
    }
}
console.log(password === correctPwd ? "Login successful!" : "Account locked.");

// ─────────────────────────────────────────────
// EXAMPLE 3 — do...while (runs AT LEAST ONCE)
// ─────────────────────────────────────────────
// Condition is checked AFTER the first execution

let attempt2 = 0;
do {
    attempt2++;
    console.log("Attempt:", attempt2);  // Attempt: 1, 2, 3
} while (attempt2 < 3);

// Even if condition starts as false, body runs once:
let n2 = 10;
do {
    console.log("This runs once even though n2 > 0:", n2);  // Runs
    n2++;
} while (n2 < 5);  // False immediately after first run

// ─────────────────────────────────────────────
// EXAMPLE 4 — for...of (iterate VALUES in an iterable)
// ─────────────────────────────────────────────
const fruitsArr = ["apple", "banana", "mango"];

for (let fruit of fruitsArr) {
    console.log(fruit);  // apple, banana, mango
}

// Works on strings too!
for (let char of "Hello") {
    process.stdout.write(char + "-");  // H-e-l-l-o-
}
console.log();

// With index using entries()
for (let [index, fruit] of fruitsArr.entries()) {
    console.log(`${index}: ${fruit}`);  // 0: apple, 1: banana, 2: mango
}

// ─────────────────────────────────────────────
// EXAMPLE 5 — for...in (iterate KEYS of an object)
// ─────────────────────────────────────────────
const studentObj = { name: "Arjun", age: 20, city: "Surat" };

for (let key in studentObj) {
    console.log(`${key}: ${studentObj[key]}`);
}
// name: Arjun   age: 20   city: Surat

// ⚠️ Warning: for...in also iterates inherited properties!
// Best practice: use hasOwnProperty check if needed
for (let key in studentObj) {
    if (studentObj.hasOwnProperty(key)) {
        // Only own properties, not inherited ones
        console.log(key, "→ own property ✓");
    }
}

// ─────────────────────────────────────────────
// EXAMPLE 6 — break and continue
// ─────────────────────────────────────────────

// break → exit the loop entirely
console.log("--- break ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;            // Stop at 5
    process.stdout.write(i + " "); // 1 2 3 4
}
console.log();

// continue → skip this iteration, move to next
console.log("--- continue ---");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;    // Skip even numbers
    process.stdout.write(i + " "); // 1 3 5 7 9
}
console.log();

// Real-world: find first item matching criteria
const inventory = [
    { name: "Laptop",  qty: 0 },
    { name: "Mouse",   qty: 5 },
    { name: "Keyboard", qty: 0 },
    { name: "Monitor", qty: 2 }
];

let firstInStock = null;
for (let item of inventory) {
    if (item.qty === 0) continue;     // Skip out-of-stock items
    firstInStock = item.name;
    break;                             // Stop at first in-stock item
}
console.log("First in stock:", firstInStock);  // Mouse

// ─────────────────────────────────────────────
// EXAMPLE 7 — Nested Loops (multiplication table)
// ─────────────────────────────────────────────
// Time complexity: O(n × m) — every combination is visited

console.log("--- Multiplication Table (3×3) ---");
for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
        line += String(row * col).padStart(4);
    }
    console.log(line);
}
// Output:
//    1   2   3
//    2   4   6
//    3   6   9

// Star triangle — nested loop pattern
console.log("--- Star Triangle ---");
for (let row = 1; row <= 5; row++) {
    console.log("*".repeat(row));
}
// *
// **
// ***
// ****
// *****

// ─────────────────────────────────────────────
// PERFORMANCE NOTE — Time Complexity
// ─────────────────────────────────────────────

/*
  Single loop over n items  → O(n)  — linear
  Nested loops (n × n)      → O(n²) — quadratic — gets slow for large n!
  Nested loops (n × m)      → O(n×m)
  Loop inside loop inside loop → O(n³) — avoid if possible!

  For n = 1,000:
    O(n)  = 1,000 operations
    O(n²) = 1,000,000 operations
    O(n³) = 1,000,000,000 operations — very slow!
*/

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Infinite loop (forgot to update counter)
// for (let i = 0; i < 5; ) { console.log(i); }  // i never changes — infinite!
// ✅ FIX: Always update: for (let i = 0; i < 5; i++)

// ❌ MISTAKE 2: Off-by-one error
// for (let i = 0; i <= 5; i++) → produces [0,1,2,3,4,5] (6 items, not 5!)
// ✅ FIX: for (let i = 1; i <= 5; i++) for [1,2,3,4,5]

// ❌ MISTAKE 3: Using for...in on arrays (gets index as string, not number)
const arr1 = [10, 20, 30];
for (let key in arr1) {
    console.log(typeof key, key);  // "string" "0" "string" "1" "string" "2"
    // ⚠️ key is a string "0", not number 0!
}
// ✅ FIX: Use for...of for arrays (gives values directly)
for (let val of arr1) {
    console.log(val);  // 10  20  30
}

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What's the difference between for...of and for...in?
  A:  for...of → iterates VALUES of an iterable (arrays, strings, Sets, Maps)
      for...in → iterates KEYS/INDICES of an object (strings in arrays too!)
      Use for...of for arrays, for...in for plain objects.

  Q2: When would you use a while loop vs a for loop?
  A:  for loop: when you know the exact number of iterations upfront.
      while loop: when the termination depends on a condition that changes
                  during execution (user input, data streaming, etc.)

  Q3: What is an infinite loop and how do you prevent it?
  A:  A loop that never terminates because the condition never becomes false.
      Prevention: ensure the loop variable moves toward the termination condition
      on every iteration (i++ for ascending, i-- for descending).

  Q4: Can you use break inside a forEach loop?
  A:  No! break and continue don't work inside forEach callbacks. Use a
      regular for loop, for...of, or Array methods like find() when you need
      to stop early.

  Q5: What does the continue statement do in a nested loop?
  A:  It skips the REST of the CURRENT iteration of the INNERMOST loop
      and proceeds to the next iteration of that loop only.
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Multiplication table of 5
console.log("\n[Task 1] Multiplication table of 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}

// Task 2 — Sum of even numbers from 1 to 50
let evenSum = 0;
for (let i = 2; i <= 50; i += 2) evenSum += i;
console.log(`[Task 2] Sum of evens 1-50: ${evenSum}`);  // 650

// Task 3 — Find all prime numbers up to 50
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {  // O(√n) — efficient!
        if (num % i === 0) return false;
    }
    return true;
}
const primes = [];
for (let i = 2; i <= 50; i++) {
    if (isPrime(i)) primes.push(i);
}
console.log(`[Task 3] Primes up to 50: ${primes.join(", ")}`);
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47

// Task 4 — FizzBuzz (classic interview problem)
console.log("[Task 4] FizzBuzz 1-20:");
for (let i = 1; i <= 20; i++) {
    if      (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3  === 0) console.log("Fizz");
    else if (i % 5  === 0) console.log("Buzz");
    else                   console.log(i);
}




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 07 — FUNCTIONS
//  What    : Reusable, named blocks of code that take inputs and return outputs.
//  Why     : DRY principle — Don't Repeat Yourself. Functions let you write logic
//             once and call it many times. They're the building blocks of programs.
//  When    : Whenever you have logic that's used more than once, or logic complex
//             enough to deserve a descriptive name.
//  When NOT: Don't create a function just to wrap one simple expression.
//             Don't use arrow functions as object methods (no 'this' context).
//
// ══════════════════════════════════════════════════════════════════════════════

/*
  Three Ways to Define a Function:
  ────────────────────────────────────────────────────────────────────────────
  1. Function Declaration
       function greet(name) { return `Hello, ${name}!`; }
       → Hoisted (available before the line where it's defined)
       → Named — great for recursion

  2. Function Expression
       const greet = function(name) { return `Hello, ${name}!`; };
       → NOT hoisted — must be defined before use
       → Can be anonymous or named

  3. Arrow Function (ES6+)
       const greet = name => `Hello, ${name}!`;
       → Shortest syntax
       → NO own `this` binding — uses `this` from enclosing scope
       → Can't be used as constructors
       → Implicit return when body is a single expression (no braces needed)
*/

// ─────────────────────────────────────────────
// EXAMPLE 1 — Function Declaration
// ─────────────────────────────────────────────
function greet(name) {
    // Input:  name (string)
    // Output: undefined (console.log returns nothing)
    console.log(`Hello, ${name}!`);
}

greet("Arjun");   // Hello, Arjun!
greet("Priya");   // Hello, Priya!
// Can call BEFORE definition (hoisting):
// greetFn("test") would work even if declared later

// ─────────────────────────────────────────────
// EXAMPLE 2 — Function with return value
// ─────────────────────────────────────────────
/**
 * Adds two numbers together.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 * Time Complexity: O(1) — constant time, single operation
 */
function add(a, b) {
    return a + b;  // return EXITS the function with a value
    // Code after return is NEVER reached!
}

console.log("Sum:", add(5, 3));    // Sum: 8
console.log("Sum:", add(10, 20));  // Sum: 30

let result = add(4, 7);
console.log("Stored result:", result);  // Stored result: 11

// ─────────────────────────────────────────────
// EXAMPLE 3 — Function Expression
// ─────────────────────────────────────────────
const multiply = function(a, b) {
    return a * b;
};
// multiply is NOT hoisted — cannot call it before this line

console.log(multiply(4, 5));  // 20

// Named function expression (useful for debugging/recursion)
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);  // recursive call works with the name 'fact'
};
console.log(factorial(5));  // 120

// ─────────────────────────────────────────────
// EXAMPLE 4 — Arrow Functions (ES6+)
// ─────────────────────────────────────────────

// Full syntax (multiple statements)
const divide = (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
};

// Concise syntax (single expression — implicit return, no braces)
const square    = x => x * x;            // Single param: no parens needed
const cube      = x => x * x * x;
const sumTwo    = (a, b) => a + b;       // Multiple params: parens required
const sayHello  = () => console.log("Hi!"); // No params: empty parens required
const makeObj   = x => ({ value: x });   // Returning an object: wrap in ()!

console.log(square(6));     // 36
console.log(cube(3));       // 27
console.log(sumTwo(10, 5)); // 15
sayHello();                 // Hi!
console.log(makeObj(42));   // { value: 42 }

// ─────────────────────────────────────────────
// EXAMPLE 5 — Default Parameters (ES6+)
// ─────────────────────────────────────────────
function welcome(name = "friend", language = "JavaScript") {
    console.log(`Hello, ${name}! Welcome to ${language}.`);
}

welcome("Arjun", "Python");  // Hello, Arjun! Welcome to Python.
welcome("Priya");            // Hello, Priya! Welcome to JavaScript. (default used)
welcome();                   // Hello, friend! Welcome to JavaScript. (both defaults)
welcome(undefined, "React"); // Hello, friend! Welcome to React. (undefined triggers default)

// Default based on other parameters
function createRange(start, end = start + 10) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
console.log(createRange(5));     // [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(createRange(1, 5));  // [1, 2, 3, 4, 5]

// ─────────────────────────────────────────────
// EXAMPLE 6 — Rest Parameters & Spread in Functions
// ─────────────────────────────────────────────

// Rest (...args): collect variable number of arguments into an array
function sumAll(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3));           // 6
console.log(sumAll(10, 20, 30, 40));    // 100
console.log(sumAll(5));                 // 5

// Mix named params with rest
function logMessage(level, ...parts) {
    const message = parts.join(" ");
    console.log(`[${level.toUpperCase()}] ${message}`);
}
logMessage("info", "Server", "started", "on port 3000");
// [INFO] Server started on port 3000

// ─────────────────────────────────────────────
// EXAMPLE 7 — Scope (where variables live)
// ─────────────────────────────────────────────

/*
  Scope Rules:
  - Global scope: visible everywhere
  - Function scope: only inside the function (var)
  - Block scope: only inside {} (let/const)
  - Closure: inner function can access outer function's variables
*/

let globalVar = "I am global";

function testScope() {
    let localVar = "I am local";
    console.log(globalVar);   // ✅ accessible
    console.log(localVar);    // ✅ accessible
}

testScope();
console.log(globalVar);       // ✅ accessible
// console.log(localVar);     // ❌ ReferenceError — localVar not accessible here

// ─────────────────────────────────────────────
// EXAMPLE 8 — Closures (functions that remember their environment)
// ─────────────────────────────────────────────
/*
  A closure is a function that "closes over" (remembers) variables
  from its outer scope, even after the outer function has returned.
  This is one of JavaScript's most powerful features.
*/

function makeCounter(startAt = 0) {
    let count = startAt;   // This variable is "captured" by the inner functions

    return {
        increment() { count++; },
        decrement() { count--; },
        reset()     { count = startAt; },
        value()     { return count; }
    };
}

const counter1 = makeCounter(0);
const counter2 = makeCounter(100);  // Independent counter

counter1.increment();
counter1.increment();
counter1.increment();
counter2.increment();

console.log("Counter1:", counter1.value()); // 3
console.log("Counter2:", counter2.value()); // 101 — independent!

// Real-world closure: function factory
function makeMultiplier(factor) {
    return number => number * factor;  // `factor` is closed over
}

const double   = makeMultiplier(2);
const triple   = makeMultiplier(3);
const tenTimes = makeMultiplier(10);

console.log(double(5));    // 10
console.log(triple(5));    // 15
console.log(tenTimes(5)); // 50

// ─────────────────────────────────────────────
// EXAMPLE 9 — Higher-Order Functions (functions as values)
// ─────────────────────────────────────────────
/*
  Higher-order functions either:
  A) Take a function as an argument, or
  B) Return a function as a result
  This is the foundation of functional programming in JS.
*/

// Passing a function as an argument:
function applyOperation(a, b, operation) {
    return operation(a, b);
}

console.log(applyOperation(10, 3, (a, b) => a + b));  // 13 (add)
console.log(applyOperation(10, 3, (a, b) => a * b));  // 30 (multiply)
console.log(applyOperation(10, 3, Math.pow));          // 1000

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Forgetting return
function badAdd(a, b) { let sum = a + b; /* forgot return */ }
console.log(badAdd(3, 4));   // undefined — no return = undefined

// ✅ FIX:
function goodAdd(a, b) { return a + b; }
console.log(goodAdd(3, 4));  // 7

// ❌ MISTAKE 2: Arrow function for object method (this problem!)
const obj = {
    name: "Widget",
    // wrong: () => because 'this' will be the outer scope (window/undefined)
    wrongGreet: () => `Hi from ${this?.name ?? "UNDEFINED"}`,  // 'this' is not the object
    // correct: regular method shorthand
    rightGreet() { return `Hi from ${this.name}`; }
};

console.log(obj.wrongGreet()); // "Hi from UNDEFINED" (broken)
console.log(obj.rightGreet()); // "Hi from Widget" (correct)

// ❌ MISTAKE 3: Mutating input parameters (functions should be pure when possible)
function addItemBad(arr, item) {
    arr.push(item);  // ❌ Modifies the ORIGINAL array!
    return arr;
}

function addItemGood(arr, item) {
    return [...arr, item];  // ✅ Returns a NEW array — doesn't touch original
}

const original2 = [1, 2, 3];
addItemBad(original2, 4);
console.log(original2);  // [1, 2, 3, 4] — the original was changed (side effect)

const original3 = [1, 2, 3];
const newArr    = addItemGood(original3, 4);
console.log(original3);  // [1, 2, 3] — untouched
console.log(newArr);     // [1, 2, 3, 4]

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What is the difference between function declaration and function expression?
  A:  Declaration: `function foo() {}` — hoisted to top of scope, available before line.
      Expression:  `const foo = function() {}` — NOT hoisted, must define before use.
      Arrow:       `const foo = () => {}` — like expression but no own `this`.

  Q2: What is a closure in JavaScript?
  A:  A closure is when an inner function retains access to variables from its
      outer function's scope, even after the outer function has returned.
      Used for: data encapsulation, factory functions, memoization, callbacks.

  Q3: What is the difference between arguments and rest parameters?
  A:  arguments: old object (not a real array), only in regular functions.
      ...rest: real array, works in arrow functions, cleaner.
      Prefer rest parameters.

  Q4: Why can't arrow functions be used as object methods?
  A:  Arrow functions don't have their own `this`. They inherit `this` from the
      surrounding lexical scope (not the object). Use regular method shorthand.

  Q5: What is a pure function?
  A:  A function that: (1) always returns the same output for the same inputs,
      and (2) has no side effects (doesn't modify external state).
      Benefits: predictable, testable, easy to reason about.
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — isEven checker
const isEven = n => n % 2 === 0;
console.log(`[Task 1] isEven(4): ${isEven(4)}  isEven(7): ${isEven(7)}`);

// Task 2 — Iterative factorial
function factorialIter(n) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}
console.log(`[Task 2] 5! = ${factorialIter(5)}`);  // 120
console.log(`[Task 2] 0! = ${factorialIter(0)}`);  // 1

// Task 3 — Temperature converter
const toFahrenheit = celsius    => (celsius * 9/5) + 32;
const toCelsius    = fahrenheit => (fahrenheit - 32) * 5/9;

console.log(`[Task 3] 100°C = ${toFahrenheit(100).toFixed(1)}°F`); // 212.0
console.log(`[Task 3] 32°F = ${toCelsius(32).toFixed(1)}°C`);      // 0.0

// Task 4 — Memoization (closure + caching)
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            console.log("(from cache)");
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    };
}

const memoFactorial = memoize(factorialIter);
console.log(`[Task 4] 10! = ${memoFactorial(10)}`); // computes
console.log(`[Task 4] 10! = ${memoFactorial(10)}`); // from cache




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 08 — ARRAYS
//  What    : Ordered, indexed list of values. Like a numbered list.
//  Why     : Most real-world data is a collection: users, products, scores, etc.
//             Arrays give you a way to store and process these collections.
//  When    : Storing ordered data, maintaining lists, when order matters.
//  When NOT: When you need to look up data by a descriptive key — use objects.
//             When order doesn't matter and you need unique values — use Set.
//
// ══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// EXAMPLE 1 — Creating and Accessing Arrays
// ─────────────────────────────────────────────
const fruits = ["apple", "banana", "mango", "grape"];

//             Index:  0        1         2       3

console.log(fruits[0]);              // apple  (first item — index 0)
console.log(fruits[3]);              // grape  (last item)
console.log(fruits[fruits.length - 1]); // grape (general formula for last item)
console.log(fruits.length);          // 4
console.log(fruits[-1]);             // undefined (JS doesn't support negative indexing)
console.log(fruits.at(-1));          // grape ← use .at() for negative indexing (ES2022)

// ─────────────────────────────────────────────
// EXAMPLE 2 — Modifying Arrays (mutation methods)
// ─────────────────────────────────────────────

/*
  Method     │ Action           │ Returns          │ Mutates?
  ───────────┼──────────────────┼──────────────────┼─────────
  push()     │ Add to END       │ New length       │ Yes
  pop()      │ Remove from END  │ Removed item     │ Yes
  unshift()  │ Add to START     │ New length       │ Yes
  shift()    │ Remove from START│ Removed item     │ Yes
  splice()   │ Add/remove anywhere│ Removed items  │ Yes
  sort()     │ Sort in place    │ The sorted array │ Yes
  reverse()  │ Reverse in place │ The array        │ Yes
*/

let colors = ["red", "green", "blue"];
colors[1] = "yellow";           // Direct index assignment
colors.push("purple");          // Add to end: ["red","yellow","blue","purple"]
let last = colors.pop();        // Remove from end: last="purple"
colors.unshift("white");        // Add to start: ["white","red","yellow","blue"]
let first = colors.shift();     // Remove from start: first="white"

console.log(colors);            // ["red", "yellow", "blue"]
console.log("Removed:", last, first); // purple white

// splice(startIndex, deleteCount, ...itemsToInsert)
let days = ["Mon", "Tue", "Thu", "Fri"];
days.splice(2, 0, "Wed");       // Insert "Wed" at index 2, delete 0 items
console.log(days);              // ["Mon","Tue","Wed","Thu","Fri"]

let removed = days.splice(1, 2); // Remove 2 items starting at index 1
console.log(removed, days);     // ["Tue","Wed"]  ["Mon","Thu","Fri"]

// ─────────────────────────────────────────────
// EXAMPLE 3 — Non-Mutating Methods (return new arrays)
// ─────────────────────────────────────────────

const nums2 = [10, 20, 30, 40, 50];

// slice(start, end) — end is EXCLUSIVE
console.log(nums2.slice(1, 3));   // [20, 30]     (index 1 up to but not including 3)
console.log(nums2.slice(2));      // [30, 40, 50] (from index 2 to end)
console.log(nums2.slice(-2));     // [40, 50]     (last 2 items)

// concat — combine arrays
const merged = [1, 2].concat([3, 4], [5, 6]);
console.log(merged);  // [1, 2, 3, 4, 5, 6]

// spread operator (modern concat)
const merged2 = [...[1, 2], ...[3, 4], ...[5, 6]];
console.log(merged2); // [1, 2, 3, 4, 5, 6]

// join — array to string
console.log(["a", "b", "c"].join("-"));   // "a-b-c"
console.log([1, 2, 3].join(", "));        // "1, 2, 3"
console.log(["Hello", "World"].join(" ")); // "Hello World"

// ─────────────────────────────────────────────
// EXAMPLE 4 — Searching Arrays
// ─────────────────────────────────────────────

const scores = [85, 92, 78, 95, 60, 88];

console.log(scores.indexOf(95));        // 3   (returns index or -1 if not found)
console.log(scores.indexOf(100));       // -1  (not found)
console.log(scores.includes(78));       // true
console.log(scores.includes(999));      // false

// indexOf uses strict equality — use find() for objects
const users2 = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(users2.indexOf({ id: 2 })); // -1 — object comparison by reference!
console.log(users2.findIndex(u => u.id === 2)); // 1 — use findIndex for objects

// ─────────────────────────────────────────────
// EXAMPLE 5 — Looping Through Arrays
// ─────────────────────────────────────────────

const numbersList = [10, 20, 30, 40, 50];

// Classic for loop (use when you need the index)
for (let i = 0; i < numbersList.length; i++) {
    process.stdout.write(numbersList[i] + " ");
}
console.log();

// for...of (modern, clean — use when you just need values)
for (let num of numbersList) {
    process.stdout.write(num + " ");
}
console.log();

// forEach (like for...of but with index available)
numbersList.forEach((num, index) => {
    // console.log(`${index}: ${num}`);
});

// ─────────────────────────────────────────────
// EXAMPLE 6 — Copying Arrays (important!)
// ─────────────────────────────────────────────

const original4 = [1, 2, 3];

// ❌ Wrong: This copies the REFERENCE, not the data
const wrongCopy = original4;
wrongCopy.push(4);
console.log(original4);  // [1, 2, 3, 4] — original was modified!

// ✅ Correct: Shallow copies
const copySpread  = [...original4];         // Spread (most common, cleanest)
const copySlice   = original4.slice();      // slice() with no args
const copyFrom    = Array.from(original4);  // Array.from()
const copyConcat  = [].concat(original4);  // concat

const orig = [1, 2, 3];
const c1 = [...orig];
c1.push(99);
console.log(orig);  // [1, 2, 3] — untouched
console.log(c1);    // [1, 2, 3, 99]

// ⚠️ Shallow copy only copies one level deep!
// For nested arrays: use JSON.parse(JSON.stringify(arr)) or structuredClone(arr)
const nested = [[1, 2], [3, 4]];
const shallowCopy = [...nested];
shallowCopy[0].push(99); // modifies the inner array in both!
console.log(nested[0]);   // [1, 2, 99] — original was also modified!

const deepCopy = structuredClone(nested); // ✅ ES2022 deep clone

// ─────────────────────────────────────────────
// EXAMPLE 7 — 2D Arrays (arrays of arrays)
// ─────────────────────────────────────────────

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]);  // 6 (row 1, column 2)

// Iterate 2D array
for (let row of matrix) {
    console.log(row.join(" | "));
}
// 1 | 2 | 3
// 4 | 5 | 6
// 7 | 8 | 9

// ─────────────────────────────────────────────
// EXAMPLE 8 — Array Destructuring (ES6+)
// ─────────────────────────────────────────────

const [first2, second, ...rest2] = [10, 20, 30, 40, 50];
console.log(first2, second, rest2);  // 10  20  [30, 40, 50]

// Swap using destructuring
let c = 1, d = 2;
[c, d] = [d, c];
console.log(c, d);  // 2  1

// Skip items
const [, , third] = [10, 20, 30];
console.log(third);  // 30

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Array starts at index 0, not 1
let items = ["a", "b", "c"];
console.log(items[0]);   // "a" — first item is at index 0!
// console.log(items[1]); // "b" (second, not "first")

// ❌ MISTAKE 2: Out-of-bounds access returns undefined, not an error
console.log(items[10]);  // undefined (silently fails — easy to miss)

// ❌ MISTAKE 3: const array can still be mutated
const constArr = [1, 2, 3];
constArr.push(4);       // ✅ allowed — modifying content, not the variable
// constArr = [5, 6];   // ❌ TypeError — can't reassign const

// ❌ MISTAKE 4: sort() without a comparator sorts numbers as STRINGS
const badSort = [10, 2, 100, 5];
badSort.sort();
console.log(badSort);  // [10, 100, 2, 5] — "10" < "2" lexicographically!
badSort.sort((a, b) => a - b);
console.log(badSort);  // [2, 5, 10, 100] ← correct

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What's the difference between splice() and slice()?
  A:  slice(start, end)  → returns a portion, does NOT modify original.
      splice(index, deleteCount, ...items) → modifies original (delete/insert).

  Q2: How do you clone an array without copying the reference?
  A:  Shallow: [...arr], arr.slice(), Array.from(arr)
      Deep (nested arrays/objects): structuredClone(arr) or JSON.parse(JSON.stringify(arr))

  Q3: What does arr.indexOf({id:1}) return if arr contains objects?
  A:  -1 always. Objects compare by reference, not value. Use arr.findIndex(x => x.id === 1).

  Q4: Can you add properties to an array?
  A:  Yes (it's an object), but you shouldn't — it's confusing and tools might ignore them.
      Use the array for indexed items and an object if you need named properties.

  Q5: What is the difference between push() and unshift()?
  A:  push() → adds to the END. O(1) — very efficient.
      unshift() → adds to the START. O(n) — shifts all elements — slower!
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Find the largest number
const vals = [34, 78, 12, 99, 45, 67];
let largest = vals[0];
for (let v of vals) { if (v > largest) largest = v; }
console.log(`[Task 1] Largest: ${largest}`);  // 99
// Alternatively: Math.max(...vals) — spread into Math.max

// Task 2 — Calculate average of marks
const marksArr = [85, 90, 78, 92, 88];
const avg = marksArr.reduce((sum, m) => sum + m, 0) / marksArr.length;
console.log(`[Task 2] Average: ${avg.toFixed(1)}`);  // 86.6

// Task 3 — Remove duplicates from array
const withDups = [1, 2, 2, 3, 4, 4, 4, 5];
const unique   = [...new Set(withDups)];  // Set only stores unique values
console.log(`[Task 3] Unique: ${unique}`); // [1, 2, 3, 4, 5]

// Task 4 — Flatten a 2D array
const nested2 = [[1, 2], [3, 4], [5, 6]];
const flat    = nested2.flat();
console.log(`[Task 4] Flat: ${flat}`);  // [1, 2, 3, 4, 5, 6]




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 09 — OBJECTS
//  What    : Unordered collections of key-value pairs. Like a record or struct.
//  Why     : Model real-world entities (users, products, orders) with named
//             properties. Keys give context that array indices can't.
//  When    : Representing entities with named attributes, configuration, state.
//  When NOT: When order matters and you need indexed access — use arrays.
//             When you need unique keys that are objects/symbols — use Map.
//
// ══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// EXAMPLE 1 — Creating and Accessing Objects
// ─────────────────────────────────────────────
const student = {
    name:   "Arjun",   // string property
    age:    20,        // number property
    city:   "Surat",   // string property
    passed: true       // boolean property
};

// Dot notation — when key is known and static
console.log(student.name);       // Arjun
console.log(student.age);        // 20

// Bracket notation — when key is dynamic, or has special characters
console.log(student["city"]);    // Surat

let propKey = "passed";
console.log(student[propKey]);   // true (dynamic key access)

// Accessing missing property
console.log(student.grade);      // undefined (not an error!)
console.log("grade" in student); // false ← correct way to check existence

// ─────────────────────────────────────────────
// EXAMPLE 2 — Modifying Objects
// ─────────────────────────────────────────────
const car = {
    brand: "Toyota",
    model: "Corolla",
    year:  2020
};

car.year  = 2024;       // Update existing property
car.color = "White";    // Add new property
delete car.color;       // Remove property

console.log(car);  // { brand: "Toyota", model: "Corolla", year: 2024 }

// ─────────────────────────────────────────────
// EXAMPLE 3 — Methods (functions inside objects)
// ─────────────────────────────────────────────
const person = {
    name:  "Priya",
    age:   25,
    greet() {                           // Method shorthand (ES6+)
        return `Hi, I am ${this.name}`; // 'this' refers to the object
    },
    introduce() {
        return `${this.name} is ${this.age} years old.`;
    },
    birthday() {
        this.age++;                     // Mutate own property via this
        return this.age;
    }
};

console.log(person.greet());      // Hi, I am Priya
console.log(person.introduce());  // Priya is 25 years old.
console.log(person.birthday());   // 26

// ─────────────────────────────────────────────
// EXAMPLE 4 — Iterating Over Object Properties
// ─────────────────────────────────────────────
const laptop = { brand: "Dell", ram: "16GB", price: 65000 };

// for...in — iterates keys
for (let key in laptop) {
    console.log(`${key}: ${laptop[key]}`);
}

// Object.keys() — array of keys
console.log(Object.keys(laptop));    // ["brand", "ram", "price"]

// Object.values() — array of values
console.log(Object.values(laptop));  // ["Dell", "16GB", 65000]

// Object.entries() — array of [key, value] pairs — very useful!
for (let [key, value] of Object.entries(laptop)) {
    console.log(`${key} = ${value}`);
}

// ─────────────────────────────────────────────
// EXAMPLE 5 — Nested Objects and Optional Chaining
// ─────────────────────────────────────────────
const employee = {
    id:   101,
    name: "Rahul",
    address: {
        city:  "Bangalore",
        state: "Karnataka",
        pin:   560001
    },
    skills:  ["JavaScript", "React", "Node"],
    contact: null   // no contact info yet
};

console.log(employee.address.city);   // Bangalore
console.log(employee.skills[0]);      // JavaScript
console.log(employee.contact?.email); // undefined (safe — no crash!)
console.log(employee.address?.country?.code ?? "IN"); // "IN" (default)

// ─────────────────────────────────────────────
// EXAMPLE 6 — Destructuring Objects
// ─────────────────────────────────────────────

const userObj = { name: "Sam", age: 30, role: "Admin", city: "Mumbai" };

// Basic destructuring
const { name: userName, age: userAge, role } = userObj;
console.log(userName, userAge, role);  // Sam 30 Admin

// Default values in destructuring
const { salary = 50000, department = "General" } = userObj;
console.log(salary, department);  // 50000 General (defaults used)

// Nested destructuring
const { address: { city: empCity } = {} } = employee;
console.log(empCity);  // Bangalore

// Function parameter destructuring (very common in real code!)
function displayUser({ name: displayName, role: displayRole = "User", age: displayAge }) {
    console.log(`${displayName} (${displayRole}) — Age: ${displayAge}`);
}
displayUser({ name: "Alice", age: 28 });             // Alice (User) — Age: 28
displayUser({ name: "Bob", role: "Admin", age: 35 }); // Bob (Admin) — Age: 35

// ─────────────────────────────────────────────
// EXAMPLE 7 — Object Spread and Merge
// ─────────────────────────────────────────────

const defaults = { theme: "light", fontSize: 14, language: "en" };
const userPrefs = { theme: "dark", fontSize: 16 };

// Merge (later properties override earlier ones)
const settings = { ...defaults, ...userPrefs };
console.log(settings); // { theme: "dark", fontSize: 16, language: "en" }

// Add/override specific properties
const updatedSettings = { ...settings, theme: "solarized", showGrid: true };
console.log(updatedSettings);

// Shallow clone
const original5 = { a: 1, b: { c: 2 } };
const clone     = { ...original5 };
clone.a  = 99;           // OK — primitive, doesn't affect original
clone.b.c = 99;          // ⚠️ Mutates original! b is a reference
console.log(original5.a, original5.b.c);  // 1  99 (b.c was mutated!)

// ─────────────────────────────────────────────
// EXAMPLE 8 — Object.assign() and Object.freeze()
// ─────────────────────────────────────────────

// Object.assign(target, ...sources)
const target = { a: 1 };
Object.assign(target, { b: 2 }, { c: 3 });
console.log(target);  // { a: 1, b: 2, c: 3 }

// Object.freeze() — prevents modification (shallow)
const config = Object.freeze({ host: "localhost", port: 3000 });
// config.port  = 9999;   // Silently fails in sloppy mode, throws in strict
//config.debug = true;   // Silently fails
console.log(config);   // { host: "localhost", port: 3000 } — unchanged

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Arrow function as object method ('this' problem)
const objBad = {
    value: 42,
    get:   () => this.value   // 'this' is NOT the object — it's outer scope!
};
// console.log(objBad.get()); // undefined or TypeError

const objGood = {
    value: 42,
    get()  { return this.value; }  // ✅ regular method — 'this' is the object
};
console.log(objGood.get());  // 42

// ❌ MISTAKE 2: Accessing property on null/undefined crashes
let user3 = null;
// console.log(user3.name); // TypeError: Cannot read properties of null
console.log(user3?.name);   // undefined — safe with optional chaining

// ❌ MISTAKE 3: Object comparison uses reference, not value
const o1 = { x: 1 };
const o2 = { x: 1 };
console.log(o1 === o2); // false — different objects in memory!
console.log(JSON.stringify(o1) === JSON.stringify(o2)); // true — value comparison

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What's the difference between dot notation and bracket notation?
  A:  Dot: obj.key — simple, static key names. Cannot use variables.
      Bracket: obj[key] — dynamic (key can be a variable), can use any string.

  Q2: What does `this` refer to inside an object method?
  A:  `this` refers to the object that the method is called on.
      Exception: arrow functions don't have their own `this` — they inherit
      it from the outer scope, which is usually not the object.

  Q3: How do you create a shallow copy of an object?
  A:  Spread: { ...obj }
      Object.assign({}, obj)
      For deep copy: structuredClone(obj) (ES2022) or JSON.parse(JSON.stringify(obj))

  Q4: What is the difference between delete and setting a property to undefined?
  A:  delete obj.key → removes the key entirely (key won't appear in Object.keys())
      obj.key = undefined → key still exists but value is undefined

  Q5: How do you check if an object has a specific property?
  A:  'key' in obj → true if property exists (including inherited properties)
      obj.hasOwnProperty('key') → true only if it's OWN property (not inherited)
      obj.key !== undefined → unreliable (property might exist but be set to undefined)
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Book object with display method
const book = {
    title:  "The Alchemist",
    author: "Paulo Coelho",
    year:   1988,
    rating: 4.7,
    display() {
        return `"${this.title}" by ${this.author} (${this.year}) ⭐${this.rating}`;
    }
};
console.log(`[Task 1]`, book.display());

// Task 2 — Student with computed average
const studentWithMarks = {
    name:  "Arjun",
    marks: [85, 90, 78, 92, 88],
    average() {
        return this.marks.reduce((s, m) => s + m, 0) / this.marks.length;
    },
    passed(passingMark = 60) {
        return this.average() >= passingMark;
    }
};
console.log(`[Task 2] ${studentWithMarks.name}: avg=${studentWithMarks.average()}, passed=${studentWithMarks.passed()}`);

// Task 3 — Count properties
const config2 = { host: "localhost", port: 3000, debug: true, timeout: 30 };
console.log(`[Task 3] Property count: ${Object.keys(config2).length}`);  // 4




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 10 — STRINGS & STRING METHODS
//  What    : Text data — sequences of characters.
//  Why     : Text is everywhere — names, messages, URLs, HTML, input validation.
//  When    : Working with user input, generating output, parsing data, templates.
//  When NOT: Avoid building HTML with raw string concatenation — use template
//             literals or a proper templating engine to prevent injection bugs.
//
// ══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// CORE STRING FACTS
// ─────────────────────────────────────────────

/*
  - Strings are IMMUTABLE — you can't modify characters in place
  - All string methods return a NEW string; original is unchanged
  - Strings are indexed (like arrays): "hello"[0] = "h"
  - Strings are iterable: for...of works on them
  - Template literals ` ` support multi-line and expressions
*/

// ─────────────────────────────────────────────
// EXAMPLE 1 — Properties and Character Access
// ─────────────────────────────────────────────
const word2 = "JavaScript";

console.log(word2.length);              // 10
console.log(word2[0]);                  // J (first character)
console.log(word2[word2.length - 1]);   // t (last character — classic formula)
console.log(word2.at(-1));             // t (modern: .at() supports negative)
console.log(word2.at(0));             // J

// Iterate over characters
for (let char of word2) {
    process.stdout.write(char + " "); // J a v a S c r i p t
}
console.log();

// ─────────────────────────────────────────────
// EXAMPLE 2 — Case Methods
// ─────────────────────────────────────────────
const rawInput = "  ArJuN ShArMa  ";

console.log(rawInput.toUpperCase());  // "  ARJUN SHARMA  "
console.log(rawInput.toLowerCase());  // "  arjun sharma  "
console.log(rawInput.trim());         // "ArJuN ShArMa"    (removes whitespace from both ends)
console.log(rawInput.trimStart());    // "ArJuN ShArMa  "  (removes leading only)
console.log(rawInput.trimEnd());      // "  ArJuN ShArMa"  (removes trailing only)

// Normalize: clean input from a form
const normalizedName = rawInput.trim().toLowerCase()
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
console.log(normalizedName);  // "Arjun Sharma"

// ─────────────────────────────────────────────
// EXAMPLE 3 — Searching in Strings
// ─────────────────────────────────────────────
const sentence = "JavaScript is amazing and JavaScript is popular";

console.log(sentence.indexOf("JavaScript"));      // 0  (first occurrence)
console.log(sentence.lastIndexOf("JavaScript"));  // 29 (last occurrence)
console.log(sentence.indexOf("Python"));          // -1 (not found)
console.log(sentence.includes("amazing"));        // true
console.log(sentence.startsWith("JavaScript"));   // true
console.log(sentence.endsWith("popular"));        // true
console.log(sentence.includes("python"));         // false (case-sensitive!)
console.log(sentence.toLowerCase().includes("python")); // false

// Search with regex
console.log(sentence.search(/javascript/i));  // 0 (case-insensitive search)

// ─────────────────────────────────────────────
// EXAMPLE 4 — Extracting Parts (slice / substring)
// ─────────────────────────────────────────────
const text = "Hello, World! Welcome to JavaScript.";

console.log(text.slice(0, 5));      // "Hello"    (index 0 to 4)
console.log(text.slice(7));         // "World! Welcome to JavaScript." (from 7 to end)
console.log(text.slice(-11, -1));   // "JavaScript" (negative counts from end)
console.log(text.substring(7, 12)); // "World"    (no negative support — always positive)

// Getting a portion between two markers:
const email = "user@example.com";
const usernamee   = email.slice(0, email.indexOf("@"));          // "user"
const domain     = email.slice(email.indexOf("@") + 1);         // "example.com"
const tld        = domain.slice(domain.lastIndexOf(".") + 1);   // "com"
console.log(username, domain, tld);  // user  example.com  com

// ─────────────────────────────────────────────
// EXAMPLE 5 — Replacing
// ─────────────────────────────────────────────
const msg = "I love cats. Cats are great! I have 2 cats.";

console.log(msg.replace("cats", "dogs"));            // First only: "I love dogs. Cats are great! I have 2 cats."
console.log(msg.replace(/cats/gi, "dogs"));          // Global+case-insensitive: all "cats"/"Cats" → "dogs"
console.log(msg.replaceAll("cats", "dogs"));         // All exact matches: "I love dogs. Cats are great! I have 2 dogs."

// Dynamic replacement with a function
const templatee = "Hello, {{name}}! You have {{count}} new messages.";
const filled   = templatee.replace(/{{(\w+)}}/g, (match, key) => {
    const data = { name: "Priya", count: 5 };
    return data[key] ?? match;
});
console.log(filled);  // "Hello, Priya! You have 5 new messages."

// ─────────────────────────────────────────────
// EXAMPLE 6 — Split and Padding
// ─────────────────────────────────────────────

// split — string to array
const csv = "apple,banana,mango,grape";
const fruitsFromCsv = csv.split(",");
console.log(fruitsFromCsv);           // ["apple","banana","mango","grape"]
console.log(fruitsFromCsv.length);    // 4

// Reconstruct with different delimiter
console.log(fruitsFromCsv.join(" | "));  // "apple | banana | mango | grape"

// Split into individual characters
console.log("hello".split(""));  // ["h","e","l","l","o"]

// Padding — great for formatting tables/receipts
console.log("5".padStart(3, "0"));    // "005" (right-align, pad left)
console.log("42".padStart(5));        // "   42" (default pad is space)
console.log("hi".padEnd(10, "."));    // "hi........" (left-align, pad right)

// ─────────────────────────────────────────────
// EXAMPLE 7 — Template Literals
// ─────────────────────────────────────────────
const tlName  = "Arjun";
const tlAge   = 20;
const tlScore = 87;

// Basic embedding
console.log(`Hello ${tlName}! You are ${tlAge} years old.`);

// Expressions in ${}
console.log(`Score: ${tlScore} → Grade: ${tlScore >= 90 ? "A" : tlScore >= 70 ? "B" : "C"}`);

// Multi-line string (preserves whitespace/newlines!)
const receipt = `
--- RECEIPT ---
Customer: ${tlName}
Amount:   Rs.${1299}
Date:     ${new Date().toLocaleDateString("en-IN")}
--- THANK YOU ---
`.trim();
console.log(receipt);

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Trying to modify a character in place (strings are immutable)
let word3 = "hello";
// word3[0] = "H";  // Silently fails — no error, no change!
word3 = "H" + word3.slice(1);  // ✅ Create a new string
console.log(word3);  // "Hello"

// ❌ MISTAKE 2: Forgetting split() returns an array
let parts = "a-b-c".split("-");
console.log(parts);     // ["a", "b", "c"]
console.log(parts[1]);  // "b" — access like array

// ❌ MISTAKE 3: String comparison is case-sensitive
console.log("hello" === "Hello");  // false
console.log("hello".toLowerCase() === "Hello".toLowerCase()); // true

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: Why can't you modify a character in a string?
  A:  Strings are immutable in JavaScript. str[0] = "X" silently fails.
      To "modify", create a new string: "X" + str.slice(1).

  Q2: What's the difference between slice() and substring()?
  A:  slice() supports negative indices (counts from end). substring() does not.
      If start > end in substring(), it swaps them. slice() returns empty string.

  Q3: How do you check if a string contains a substring? (3 ways)
  A:  str.includes("sub")       → boolean (most readable)
      str.indexOf("sub") !== -1 → boolean (older style)
      /sub/i.test(str)          → boolean (with regex, case-insensitive)

  Q4: How do you reverse a string?
  A:  str.split("").reverse().join("")
      Works for ASCII; may have issues with emoji/multi-byte chars.

  Q5: What are template literals and tagged template literals?
  A:  Template literals: backticks, ${expressions}, multi-line.
      Tagged templates: fn`Hello ${name}!` — a function processes the template.
      Used in libraries like: styled-components (CSS-in-JS), gql (GraphQL).
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Count vowels in a string
function countVowels(s) {
    return [...s.toLowerCase()].filter(ch => "aeiou".includes(ch)).length;
}
console.log(`[Task 1] Vowels in "JavaScript": ${countVowels("JavaScript")}`);  // 3

// Task 2 — Title case a sentence
function toTitleCase(s) {
    return s
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(`[Task 2] Title: ${toTitleCase("hello world from javascript")}`);
// Hello World From Javascript

// Task 3 — Check if palindrome (ignoring spaces and case)
function isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split("").reverse().join("");
}
console.log(`[Task 3] "racecar": ${isPalindrome("racecar")}`);     // true
console.log(`[Task 3] "A man a plan a canal Panama": ${isPalindrome("A man a plan a canal Panama")}`); // true
console.log(`[Task 3] "hello": ${isPalindrome("hello")}`);         // false

// Task 4 — Extract details from a formatted string
const productCode = "CAT-ELEC-LAPTOP-001";
const [categorys, subcategory, productType, id] = productCode.split("-");
console.log(`[Task 4]`, { categorys, subcategory, productType, id });




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 11 — MODERN ARRAY METHODS
//  What    : Higher-order functions that transform, filter, or reduce arrays.
//  Why     : These methods are declarative — they describe WHAT you want, not HOW.
//             They don't mutate the original array (except sort/reverse).
//             They enable functional programming patterns in JS.
//  When    : Processing data — always prefer these over manual for loops.
//  When NOT: Don't use map/filter if you need to break out early (no break support).
//             Don't use reduce for simple iterations (forEach is clearer).
//
// ══════════════════════════════════════════════════════════════════════════════

/*
  Method    │ What it does                          │ Returns
  ──────────┼───────────────────────────────────────┼──────────────────────
  map()     │ Transform every item                  │ New array (same length)
  filter()  │ Keep items that pass a test           │ New array (≤ original)
  reduce()  │ Combine all items into ONE value      │ Anything (number, obj, array)
  find()    │ First item matching condition         │ The item or undefined
  findIndex()│ Index of first matching item         │ Number (-1 if not found)
  some()    │ Does AT LEAST ONE pass the test?      │ Boolean
  every()   │ Do ALL items pass the test?           │ Boolean
  sort()    │ Sort the array (careful: mutates!)    │ The sorted array
  flat()    │ Flatten nested arrays                 │ New flattened array
  flatMap() │ map() then flat(1)                   │ New array
  forEach() │ Run a function for each item          │ undefined
*/

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ─────────────────────────────────────────────
// EXAMPLE 1 — map() — Transform Each Item
// ─────────────────────────────────────────────
/*
  Signature: array.map(callbackFn(currentValue, index, array))
  Returns:   New array with same number of items (transformed)
  Mutates:   No
*/

const doubled = numbers3.map(n => n * 2);
console.log("Doubled:", doubled);
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const pricesList = [100, 250, 399, 79];
const priceLabels = pricesList.map(p => `Rs.${p.toFixed(2)}`);
console.log("Prices:", priceLabels);
// ["Rs.100.00","Rs.250.00","Rs.399.00","Rs.79.00"]

// Real-world: transform API data
const apiUsers = [
    { id: 1, first_name: "alice", last_name: "JONES" },
    { id: 2, first_name: "BOB",   last_name: "smith" }
];
const normalizedUsers = apiUsers.map(u => ({
    id:   u.id,
    name: `${u.first_name} ${u.last_name}`.toLowerCase()
              .split(" ")
              .map(w => w[0].toUpperCase() + w.slice(1))
              .join(" ")
}));
console.log("Normalized users:", normalizedUsers);
// [{ id: 1, name: "Alice Jones" }, { id: 2, name: "Bob Smith" }]

// ─────────────────────────────────────────────
// EXAMPLE 2 — filter() — Keep Items That Pass
// ─────────────────────────────────────────────
/*
  Signature: array.filter(callbackFn(currentValue, index, array))
  Returns:   New array with only items for which callback returned true
  Mutates:   No
*/

const evens = numbers3.filter(n => n % 2 === 0);
console.log("Evens:", evens);  // [2, 4, 6, 8, 10]

const products = [
    { name: "Laptop",  price: 50000, inStock: true  },
    { name: "Phone",   price: 20000, inStock: false  },
    { name: "Tablet",  price: 30000, inStock: true   },
    { name: "Speaker", price: 5000,  inStock: false  }
];

// Chaining filter + map
const affordableAvailable = products
    .filter(p => p.inStock && p.price <= 35000)
    .map(p => p.name);
console.log("Affordable & available:", affordableAvailable); // ["Tablet"]

// ─────────────────────────────────────────────
// EXAMPLE 3 — reduce() — Combine Into One Value
// ─────────────────────────────────────────────
/*
  Signature: array.reduce(callbackFn(accumulator, currentValue, index, array), initialValue)
  Returns:   A single value (the final accumulator)
  Mutates:   No
  ⚠️ ALWAYS provide initialValue to avoid errors on empty arrays!
*/

// Sum all numbers
const total = numbers3.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", total);  // 55

// Find max value
const maxValue = numbers3.reduce((max, n) => n > max ? n : max, -Infinity);
console.log("Max:", maxValue);  // 10

// Group by a property (building an object with reduce)
const ordersByStatus = [
    { id: 1, status: "pending"   },
    { id: 2, status: "shipped"   },
    { id: 3, status: "pending"   },
    { id: 4, status: "delivered" },
    { id: 5, status: "shipped"   }
];

const grouped = ordersByStatus.reduce((acc, order) => {
    if (!acc[order.status]) acc[order.status] = [];
    acc[order.status].push(order.id);
    return acc;
}, {});
console.log("Grouped orders:", grouped);
// { pending: [1,3], shipped: [2,5], delivered: [4] }

// Count occurrences
const fruits2 = ["apple","banana","apple","mango","banana","apple"];
const count2  = fruits2.reduce((acc, f) => {
    acc[f] = (acc[f] ?? 0) + 1;
    return acc;
}, {});
console.log("Fruit counts:", count2);
// { apple: 3, banana: 2, mango: 1 }

// ─────────────────────────────────────────────
// EXAMPLE 4 — find() and findIndex()
// ─────────────────────────────────────────────
const users3 = [
    { id: 1, name: "Alice", role: "admin"  },
    { id: 2, name: "Bob",   role: "user"   },
    { id: 3, name: "Carol", role: "editor" }
];

// find() — returns the FIRST matching item (or undefined)
const admin = users3.find(u => u.role === "admin");
console.log("Admin:", admin);  // { id: 1, name: "Alice", role: "admin" }

const noMatch = users3.find(u => u.role === "superuser");
console.log("Superuser:", noMatch);  // undefined

// findIndex() — returns the INDEX of first match (or -1)
const carolIndex = users3.findIndex(u => u.name === "Carol");
console.log("Carol's index:", carolIndex);  // 2

// ─────────────────────────────────────────────
// EXAMPLE 5 — some() and every()
// ─────────────────────────────────────────────

const scores4 = [72, 85, 90, 64, 78];

// some() — like OR: true if AT LEAST ONE passes
console.log("Any score >= 90?", scores4.some(s => s >= 90));   // true
console.log("Any score >= 95?", scores4.some(s => s >= 95));   // false

// every() — like AND: true only if ALL pass
console.log("All scores >= 60?", scores4.every(s => s >= 60)); // true
console.log("All scores >= 80?", scores4.every(s => s >= 80)); // false

// Real-world: check if cart is valid
const cartItems = [
    { name: "Book",  price: 199, qty: 1 },
    { name: "Pen",   price: 20,  qty: 3 },
    { name: "Ruler", price: 0,   qty: 1 }
];
const allValid   = cartItems.every(item => item.price > 0 && item.qty > 0);
const hasInvalid = cartItems.some(item => item.price <= 0);
console.log("All valid:", allValid);      // false (Ruler price is 0)
console.log("Has invalid:", hasInvalid);  // true

// ─────────────────────────────────────────────
// EXAMPLE 6 — sort() — Sort Arrays
// ─────────────────────────────────────────────

// String sort (default) — works correctly for strings
const letters2 = ["banana", "apple", "cherry", "date"];
letters2.sort();
console.log("Sorted strings:", letters2);  // ["apple","banana","cherry","date"]

// ❌ Default sort BREAKS for numbers!
const numSort = [10, 2, 100, 5, 1];
numSort.sort();  // Sorts as strings: "1" < "10" < "100" < "2" < "5"
console.log("Wrong sort:", numSort);  // [1, 10, 100, 2, 5]

// ✅ Correct: provide a comparator function
// comparator(a, b): negative = a before b, 0 = equal, positive = b before a
numSort.sort((a, b) => a - b);       // ascending
console.log("Ascending:", numSort);  // [1, 2, 5, 10, 100]

numSort.sort((a, b) => b - a);       // descending
console.log("Descending:", numSort); // [100, 10, 5, 2, 1]

// Sort objects by property
const productsSorted = [...products].sort((a, b) => a.price - b.price);
console.log("Products by price (asc):", productsSorted.map(p => p.name));
// ["Speaker", "Phone", "Tablet", "Laptop"]

// ─────────────────────────────────────────────
// EXAMPLE 7 — Method Chaining
// ─────────────────────────────────────────────
// The power of immutable methods: chain them together for complex pipelines

const sales = [
    { product: "Laptop", amount: 50000, region: "North" },
    { product: "Phone",  amount: 20000, region: "South" },
    { product: "Tablet", amount: 30000, region: "North" },
    { product: "Phone",  amount: 25000, region: "North" },
    { product: "Laptop", amount: 55000, region: "South" }
];

// "Total sales amount in the North region, sorted by amount"
const northTotal = sales
    .filter(s => s.region === "North")        // keep north only
    .map(s => s.amount)                        // extract amounts
    .reduce((sum, amt) => sum + amt, 0);       // sum them

console.log("North total:", northTotal);  // 105000

// "Names of products costing > 25000, sorted alphabetically"
const expensiveNames = sales
    .filter(s => s.amount > 25000)
    .map(s => s.product)
    .sort()
    .filter((name, i, arr) => arr.indexOf(name) === i); // unique
console.log("Expensive unique products:", expensiveNames);

// ─────────────────────────────────────────────
// COMMON MISTAKES
// ─────────────────────────────────────────────

// ❌ MISTAKE 1: Not saving the result of map/filter
const arr4 = [1, 2, 3];
arr4.map(x => x * 2);               // Result thrown away!
const result2 = arr4.map(x => x * 2); // ✅ save it

// ❌ MISTAKE 2: No initialValue in reduce on empty array
// [].reduce((a, b) => a + b);  // TypeError!
const safeSum = [].reduce((a, b) => a + b, 0);  // ✅ always provide initialValue
console.log("Safe sum of []:", safeSum);  // 0

// ❌ MISTAKE 3: Using map when you don't need the result (use forEach)
// arr.map(x => console.log(x));  // Wasteful — creates unused array
// ✅ Use forEach for side effects
arr4.forEach(x => console.log(x));

// ❌ MISTAKE 4: Sorting numbers without a comparator
console.log([10, 2, 100].sort());          // [10, 100, 2] — wrong!
console.log([10, 2, 100].sort((a,b)=>a-b)); // [2, 10, 100] — correct!

// ─────────────────────────────────────────────
// INTERVIEW QUESTIONS
// ─────────────────────────────────────────────

/*
  Q1: What's the difference between map() and forEach()?
  A:  map() returns a NEW array with transformed values.
      forEach() returns undefined — used only for side effects (logging, updating DOM).
      Use map() when you need the result. Use forEach() when you don't.

  Q2: How does reduce() work?
  A:  reduce(fn, initialValue) calls fn with (accumulator, currentItem) for each item.
      The return value becomes the accumulator for the next call.
      After the last item, the final accumulator value is returned.

  Q3: What is method chaining and when should you use it?
  A:  Calling multiple methods sequentially on the same data:
      arr.filter(...).map(...).reduce(...)
      Use it when you need to pipeline data transformations. 
      Avoid chains that are so long they become hard to read/debug.

  Q4: Does sort() mutate the original array?
  A:  YES! sort() and reverse() mutate in place. Always create a copy first:
      const sorted = [...arr].sort((a, b) => a - b);

  Q5: When would you use find() vs filter()?
  A:  find() → when you want the FIRST matching item (stops when found). Returns item.
      filter() → when you want ALL matching items. Returns array.
*/

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Products under Rs.25000
const cheap = products.filter(p => p.price < 25000).map(p => p.name);
console.log(`[Task 1] Cheap products: ${cheap.join(", ")}`);

// Task 2 — Average grade
const grades = [80, 90, 75, 85, 70];
const avgGrade = grades.reduce((sum, g) => sum + g, 0) / grades.length;
console.log(`[Task 2] Average grade: ${avgGrade}`);  // 80

// Task 3 — Real-world pipeline: top 2 products by revenue
const inventory2 = [
    { name: "Laptop",  sold: 50,  price: 50000 },
    { name: "Phone",   sold: 200, price: 20000  },
    { name: "Tablet",  sold: 80,  price: 30000  },
    { name: "Speaker", sold: 300, price: 5000   }
];

const top2ByRevenue = inventory2
    .map(p => ({ ...p, revenue: p.sold * p.price }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 2)
    .map(p => `${p.name}: Rs.${p.revenue.toLocaleString()}`);

console.log(`[Task 3] Top 2 by revenue: ${top2ByRevenue.join(" | ")}`);




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 12 — TEMPLATE LITERALS (DEEP DIVE)
//  What    : String syntax using backticks (`) that enables embedding expressions.
//  Why     : Much cleaner than string concatenation. Supports multi-line.
//             Enables HTML generation, email templates, receipt formatting.
//  When    : ANY time you're building a string that includes variables, expressions,
//             or spans multiple lines.
//  When NOT: Simple strings with no variables — plain quotes are fine.
//             Don't build user-facing HTML via template literals (XSS risk) —
//             use DOM methods or a sanitizing library.
//
// ══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// EXAMPLE 1 — Basic Embedding
// ─────────────────────────────────────────────
const tName = "Arjun";
const tAge  = 20;

// Old way (concatenation — ugly)
// "My name is " + tName + " and I am " + tAge + " years old."

// New way (template literal — clean)
console.log(`My name is ${tName} and I am ${tAge} years old.`);

// ─────────────────────────────────────────────
// EXAMPLE 2 — Expressions Inside ${}
// ─────────────────────────────────────────────
const tlA = 10, tlB = 5;
console.log(`Sum: ${tlA + tlB}`);            // Sum: 15
console.log(`Product: ${tlA * tlB}`);        // Product: 50
console.log(`Average: ${(tlA + tlB) / 2}`);  // Average: 7.5
console.log(`Is A > B? ${tlA > tlB}`);       // Is A > B? true

// Function calls in ${}
console.log(`Today: ${new Date().toLocaleDateString("en-IN")}`);
console.log(`PI: ${Math.PI.toFixed(4)}`);    // PI: 3.1416
console.log(`Random: ${Math.floor(Math.random() * 100)}`);

// Ternary in ${}
const score5 = 85;
console.log(`Grade: ${score5 >= 90 ? "A" : score5 >= 70 ? "B" : "C"}`); // Grade: B

// ─────────────────────────────────────────────
// EXAMPLE 3 — Multi-line Strings
// ─────────────────────────────────────────────

// Old way: "\n" escape characters everywhere
// "Dear " + name + ",\n\nYour payment...\n\nRegards"

// New way: natural multi-line
const recipient = "Priya";
const amount    = 1500;

const emailBody = `
Dear ${recipient},

Your payment of Rs.${amount} was received successfully.
Transaction ID: TXN${Date.now()}

Thank you for your purchase!

Best regards,
Team JS Learning
`.trim();

console.log(emailBody);

// ─────────────────────────────────────────────
// EXAMPLE 4 — Generating HTML (reference — use in browser)
// ─────────────────────────────────────────────

function createProductCard(product) {
    return `
<div class="product-card" data-id="${product.id}">
    <h2 class="product-title">${product.name}</h2>
    <span class="price">Rs.${product.price.toLocaleString()}</span>
    <span class="badge ${product.inStock ? "in-stock" : "out-of-stock"}">
        ${product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
    </span>
    <button ${!product.inStock ? "disabled" : ""}>
        Add to Cart
    </button>
</div>`.trim();
}

console.log(createProductCard({
    id: 1, name: "Laptop", price: 50000, inStock: true
}));

// ─────────────────────────────────────────────
// EXAMPLE 5 — Formatted Receipt with Template Literals
// ─────────────────────────────────────────────

function generateReceipt(customerName, items) {
    const RECEIPT_WIDTH = 40;
    const hr = "─".repeat(RECEIPT_WIDTH);

    const itemLines = items.map(item => {
        const total = item.qty * item.price;
        const left  = `${item.name} ×${item.qty}`;
        const right = `Rs.${total}`;
        const spaces = RECEIPT_WIDTH - left.length - right.length;
        return left + " ".repeat(Math.max(1, spaces)) + right;
    }).join("\n");

    const grandTotal = items.reduce((s, i) => s + i.qty * i.price, 0);
    const tax        = grandTotal * 0.18;
    const withTax    = grandTotal + tax;

    return `
${hr}
         JAVASCRIPT STORE
${hr}
Customer: ${customerName}
Date    : ${new Date().toLocaleDateString("en-IN")}
${hr}
${itemLines}
${hr}
Subtotal : Rs.${grandTotal}
GST 18%  : Rs.${tax.toFixed(2)}
TOTAL    : Rs.${withTax.toFixed(2)}
${hr}
       Thank you for shopping!
${hr}
`.trim();
}

const cartForReceipt = [
    { name: "Notebook", qty: 2, price: 50  },
    { name: "Pen",      qty: 5, price: 10  },
    { name: "Eraser",   qty: 1, price: 15  }
];

console.log(generateReceipt("Arjun Sharma", cartForReceipt));

// ─────────────────────────────────────────────
// PRACTICE TASKS
// ─────────────────────────────────────────────

// Task 1 — Greeting card function
function greetingCard(person, occasion) {
    return `
╔════════════════════════╗
  Happy ${occasion}!
  Dear ${person},
  Wishing you all the best!
╚════════════════════════╝`.trim();
}
console.log(greetingCard("Rahul", "Birthday"));

// Task 2 — Report card generator
function reportCard(studentData) {
    const avg = studentData.marks.reduce((s, m) => s + m, 0) / studentData.marks.length;
    const highestMark = Math.max(...studentData.marks);
    const lowestMark  = Math.min(...studentData.marks);

    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         REPORT CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name    : ${studentData.name}
Marks   : ${studentData.marks.join(", ")}
Average : ${avg.toFixed(1)}%
Highest : ${highestMark}  |  Lowest: ${lowestMark}
Result  : ${avg >= 50 ? "✓ PASS" : "✗ FAIL"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.trim();
}

console.log(reportCard({ name: "Arjun Sharma", marks: [85, 78, 92, 80, 75] }));




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 13 — DOM BASICS (Browser Only — Reference)
//  What    : The Document Object Model — JavaScript's interface to HTML.
//  Why     : The DOM is how JS makes web pages interactive.
//  When    : Any front-end web development.
//  When NOT: Server-side JS (Node.js) — no DOM available there.
//
// ══════════════════════════════════════════════════════════════════════════════

/*
  ┌─────────────────────────────────────────────────────────────────┐
  │  NOTE: This file runs in Node.js — DOM operations won't work.   │
  │  This topic is a reference/cheat sheet for browser usage.       │
  │  Create an index.html and link this script to use DOM.          │
  └─────────────────────────────────────────────────────────────────┘

  ─── SELECTING ELEMENTS ────────────────────────────────────────────
  document.getElementById("id")          → One element by ID
  document.querySelector(".class")        → First element matching CSS selector
  document.querySelectorAll(".class")     → All elements matching selector (NodeList)
  document.getElementsByTagName("p")      → HTMLCollection of all <p> tags

  ─── READING/CHANGING CONTENT ──────────────────────────────────────
  element.textContent = "New text"        → Set plain text (safe — no HTML)
  element.innerHTML   = "<b>Bold</b>"     → Set HTML content (⚠️ XSS risk)
  element.value                           → For input fields
  element.getAttribute("src")            → Get any attribute
  element.setAttribute("src", "img.jpg") → Set any attribute

  ─── STYLING ───────────────────────────────────────────────────────
  element.style.color = "red"            → Inline style
  element.style.backgroundColor = "blue"
  element.classList.add("active")        → Add CSS class
  element.classList.remove("hidden")     → Remove CSS class
  element.classList.toggle("visible")    → Toggle CSS class
  element.classList.contains("active")   → Check if class exists

  ─── CREATING/REMOVING ELEMENTS ────────────────────────────────────
  const el = document.createElement("div")  → Create new element
  parent.appendChild(el)                     → Add to end of parent
  parent.prepend(el)                         → Add to start
  parent.insertBefore(el, reference)         → Insert before another
  el.remove()                                → Remove element from DOM

  ─── EVENTS ────────────────────────────────────────────────────────
  element.addEventListener("click",   fn)   → Click event
  element.addEventListener("input",   fn)   → User typing in field
  element.addEventListener("change",  fn)   → Form field change
  element.addEventListener("submit",  fn)   → Form submitted
  element.addEventListener("keydown", fn)   → Key pressed
  element.addEventListener("load",    fn)   → Page/resource loaded
  element.removeEventListener("click", fn)  → Remove listener (same fn reference!)

  ─── EVENT OBJECT ──────────────────────────────────────────────────
  element.addEventListener("click", (event) => {
      console.log(event.target);      // Element that was clicked
      console.log(event.type);        // "click"
      event.preventDefault();          // Stop default action (form submit, link nav)
      event.stopPropagation();         // Stop event bubbling up
  });

  ─── EXAMPLE: INTERACTIVE BUTTON (put this in a browser script) ────
  const btn = document.getElementById("myBtn");
  const output = document.querySelector(".output");
  let count = 0;

  btn.addEventListener("click", () => {
      count++;
      output.textContent = `Clicked ${count} times`;
      btn.style.backgroundColor = count > 5 ? "red" : "blue";
  });

  ─── INTERVIEW QUESTIONS ────────────────────────────────────────────

  Q1: What's the difference between innerHTML and textContent?
  A:  textContent: sets plain text — HTML tags are escaped, no XSS risk.
      innerHTML:   parses HTML — can inject elements but enables XSS attacks.
      Use textContent for user input, innerHTML only for trusted content.

  Q2: What is event bubbling?
  A:  When an event fires on a child, it "bubbles up" to parent elements,
      triggering their listeners too. Stop it with event.stopPropagation().

  Q3: What is event delegation?
  A:  Attaching ONE event listener to a parent to handle events from many
      children, using event.target to identify which child was clicked.
      More efficient than adding listeners to every child.

  Q4: What's the difference between querySelector and getElementById?
  A:  getElementById: only selects by ID, faster.
      querySelector: supports any CSS selector ("#id", ".class", "tag", etc.)

  Q5: Why is innerHTML dangerous?
  A:  If user input is put into innerHTML, an attacker can inject scripts:
      element.innerHTML = userInput;  // XSS: userInput = "<script>...</script>"
      Always use textContent for user-controlled data.
*/

console.log("--- DOM Reference (see comments above for full API) ---");
console.log("To use DOM: create index.html, link this script with <script src='...'>");




// ══════════════════════════════════════════════════════════════════════════════
//
//  TOPIC 14 — MINI PROJECTS & EXERCISES
//
// ══════════════════════════════════════════════════════════════════════════════

console.log("\n╔═════════════════════════════════════════════╗");
console.log("║  MINI PROJECTS                              ║");
console.log("╚═════════════════════════════════════════════╝");

// ─────────────────────────────────────────────
// MINI PROJECT 1 — Number Guessing Game (Logic Demo)
// ─────────────────────────────────────────────
/*
  Concepts: variables, type conversion, operators, conditionals, loops, functions
  Real version: run node game-node.js or open index.html in browser
*/

function numberGuessingGame(secret, maxTries = 5, testGuesses = []) {
    let attempts = 0;
    let guessed  = false;

    console.log(`\n[Game] Secret: ${secret}. You have ${maxTries} tries.`);

    for (const guess of testGuesses) {
        if (attempts >= maxTries) break;
        attempts++;

        if (guess === secret) {
            guessed = true;
            console.log(`  Attempt ${attempts}: ${guess} → ✓ CORRECT! Won in ${attempts} tries!`);
            break;
        } else {
            const hint = guess < secret ? "Too low ↑" : "Too high ↓";
            console.log(`  Attempt ${attempts}: ${guess} → ${hint}`);
        }
    }

    if (!guessed) {
        console.log(`  Game over! Secret was ${secret}.`);
    }

    return { guessed, attempts, secret };
}

numberGuessingGame(7, 5, [3, 9, 7]);        // Wins in 3 tries
numberGuessingGame(4, 3, [1, 2, 3]);        // Loses (never guesses 4)

// ─────────────────────────────────────────────
// MINI PROJECT 2 — Product Store
// ─────────────────────────────────────────────

const store = {
    products: [
        { id: 1, name: "Laptop",   price: 50000, category: "Electronics", stock: 10 },
        { id: 2, name: "Phone",    price: 20000, category: "Electronics", stock: 5  },
        { id: 3, name: "Novel",    price: 350,   category: "Books",       stock: 50 },
        { id: 4, name: "Headphones",price: 3000, category: "Electronics", stock: 20 },
        { id: 5, name: "Cookbook", price: 499,   category: "Books",       stock: 30 }
    ],

    // Get products by category
    byCategory(cat) {
        return this.products.filter(p => p.category === cat);
    },

    // Get products under a price
    under(maxPrice) {
        return this.products.filter(p => p.price < maxPrice);
    },

    // Total inventory value
    inventoryValue() {
        return this.products.reduce((sum, p) => sum + p.price * p.stock, 0);
    },

    // Search by name
    search(query) {
        const q = query.toLowerCase();
        return this.products.filter(p => p.name.toLowerCase().includes(q));
    },

    // Display summary
    summary() {
        const byCategory = this.products.reduce((acc, p) => {
            acc[p.category] = (acc[p.category] ?? 0) + 1;
            return acc;
        }, {});

        return `
Products: ${this.products.length}
Categories: ${Object.entries(byCategory).map(([cat, n]) => `${cat}(${n})`).join(", ")}
Total Inventory Value: Rs.${this.inventoryValue().toLocaleString()}
Most Expensive: ${this.products.sort((a, b) => b.price - a.price)[0].name}
        `.trim();
    }
};

console.log("\n[Project 2] Electronics:", store.byCategory("Electronics").map(p => p.name));
console.log("[Project 2] Under Rs.1000:", store.under(1000).map(p => p.name));
console.log("[Project 2] Search 'book':", store.search("book").map(p => p.name));
console.log("[Project 2]\n" + store.summary());

// ─────────────────────────────────────────────
// MINI PROJECT 3 — Student Grade Manager
// ─────────────────────────────────────────────

function gradeManager(students) {
    function letterGrade(avg) {
        if (avg >= 90) return "A";
        if (avg >= 80) return "B";
        if (avg >= 70) return "C";
        if (avg >= 60) return "D";
        return "F";
    }

    const processed = students.map(s => {
        const avg = s.marks.reduce((sum, m) => sum + m, 0) / s.marks.length;
        return {
            name:   s.name,
            avg:    parseFloat(avg.toFixed(1)),
            grade:  letterGrade(avg),
            passed: avg >= 60,
            highest: Math.max(...s.marks),
            lowest:  Math.min(...s.marks)
        };
    });

    const classAvg = processed.reduce((sum, s) => sum + s.avg, 0) / processed.length;
    const topStudent = processed.reduce((top, s) => s.avg > top.avg ? s : top);

    console.log("\n[Project 3] Grade Report:");
    console.log("─".repeat(50));
    processed.forEach(s => {
        console.log(
            `${s.name.padEnd(15)} Avg: ${String(s.avg).padStart(5)}  ` +
            `Grade: ${s.grade}  ${s.passed ? "✓ PASS" : "✗ FAIL"}`
        );
    });
    console.log("─".repeat(50));
    console.log(`Class Average: ${classAvg.toFixed(1)}`);
    console.log(`Top Student: ${topStudent.name} (${topStudent.avg})`);

    return { students: processed, classAvg, topStudent };
}

gradeManager([
    { name: "Arjun",  marks: [85, 90, 78, 92, 88] },
    { name: "Priya",  marks: [72, 68, 80, 75, 70]  },
    { name: "Rahul",  marks: [55, 60, 48, 52, 58]  },
    { name: "Sneha",  marks: [95, 98, 100, 97, 93] }
]);




// ══════════════════════════════════════════════════════════════════════════════
//
//  CHEAT SHEET — QUICK REFERENCE
//
// ══════════════════════════════════════════════════════════════════════════════

console.log(`
╔══════════════════════════════════════════════════════════════════════╗
║                    JAVASCRIPT CHEAT SHEET                            ║
╠══════════════════════════════════════════════════════════════════════╣
║  VARIABLES                                                           ║
║    const PI = 3.14;     let count = 0;     // avoid var             ║
║                                                                      ║
║  DATA TYPES                                                          ║
║    number | string | boolean | null | undefined | bigint | symbol   ║
║    typeof x  →  "number" | "string" | "boolean" | "object" | etc.  ║
║                                                                      ║
║  FALSY VALUES (convert to false)                                     ║
║    false  0  ""  null  undefined  NaN                               ║
║                                                                      ║
║  TYPE CONVERSION                                                     ║
║    Number("42")=42   String(99)="99"   Boolean(0)=false            ║
║    parseInt("25px")=25   parseFloat("3.14x")=3.14                  ║
║                                                                      ║
║  OPERATORS                                                           ║
║    + - * / % **   === !==  > <  >= <=   && || !   ??   ?.          ║
║    condition ? valueTrue : valueFalse   (ternary)                   ║
║                                                                      ║
║  CONTROL FLOW                                                        ║
║    if (x>0) {}  else if (x<0) {}  else {}                          ║
║    switch(x) { case 1: ...; break; default: ... }                   ║
║                                                                      ║
║  LOOPS                                                               ║
║    for (let i=0; i<n; i++) {}           // known count              ║
║    while (condition) {}                 // unknown count             ║
║    for (let item of array) {}           // array values             ║
║    for (let key in object) {}           // object keys              ║
║                                                                      ║
║  FUNCTIONS                                                           ║
║    function fn(a, b=10) { return a + b; }  // declaration          ║
║    const fn = (a, b) => a + b;             // arrow                ║
║    const fn = function(a, b) { ... }        // expression           ║
║                                                                      ║
║  ARRAYS                                                              ║
║    let a = [1,2,3];  a[0]  a.length  a.push()  a.pop()            ║
║    [...a]  a.slice()  a.concat()  a.join()  a.indexOf()            ║
║                                                                      ║
║  OBJECTS                                                             ║
║    let o = {name:"A"};  o.name  o["name"]  delete o.name          ║
║    Object.keys(o)  Object.values(o)  Object.entries(o)             ║
║    const {name, age} = o;  // destructuring                        ║
║                                                                      ║
║  ARRAY METHODS                                                       ║
║    .map(fn)     → new array (transformed)                           ║
║    .filter(fn)  → new array (filtered)                              ║
║    .reduce(fn, init) → single value                                 ║
║    .find(fn)    → first match  .findIndex(fn) → index              ║
║    .some(fn)    → boolean (any?)  .every(fn) → boolean (all?)      ║
║    .sort((a,b)=>a-b)  → sorted (mutates!)                         ║
║                                                                      ║
║  STRINGS                                                             ║
║    .length  .slice()  .includes()  .split()  .trim()               ║
║    .toUpperCase()  .toLowerCase()  .replace()  .startsWith()       ║
║                                                                      ║
║  TEMPLATE LITERALS                                                   ║
║    \`Hello \${name}, you are \${age} years old!\`                      ║
║    \`Multiline                                                        ║
║     string!\`                                                        ║
╚══════════════════════════════════════════════════════════════════════╝
`);

console.log("✅ JavaScript Complete Handbook — All topics covered!");
console.log("   Happy coding! Keep building, keep learning. 🚀");