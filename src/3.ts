// What type is this??
// TypeScript won't infer from usage, just declaration.
let someName;

// That's better.
// Even though it's not used yet, we later will only allow strings.
let betterName: string;
betterName = "Josh";

// Type 'number' is not assignable to type 'string'.
betterName = 0;

// Standalone function declarations like this one can declare parameter types.
// Otherwise, TypeScript again won't know what type they are.
function sayName(name: string, times: number) {
    for (let i = 0; i < times; i += 1) {
        console.log(`${name}${"!".repeat(times)}`);
    }
}

// We can declare fancier types too, like functions or arrays of things
// This 'saysName' variable will be a function that takes in names and returns a string.
let joinNames: (names: string[]) => string;

// If a function is given to something that knows its parameter's types,
// TypeScript can infer what type it is.
joinNames = names => names.join(" and ");
["apple", "banana", "cherry"].forEach(fruit => console.log(`${fruit}!`));
