let myName = "Josh Goldberg";

// Property 'len' does not exist on type 'string'.
// This is an error because:
// 1. TypeScript knows 'myName' is of type 'string'
// 2. The 'string' type doesn't have a 'len' property
console.log(myName.len);

// Cannot find name 'len'.
// This is an error because we don't know of any global
// object (function or otherwise) with the name 'len'.
console.log(len(myName));

// This expression is not callable.
// Type 'Number' has no call signatures.
// That's TypeScript telling us 'length' is a number.
console.log(myName.length());

// Type 'number' is not assignable to type 'string'.
// TypeScript won't let us assign a differently typed value.
betterName = 0;

// TypeScript's got nothing bad to say about this.
console.log(myName.length);
