// TypeScript sees that this function takes in two parameters...
function greetPerson(first, last) {
    console.log(`Hello, ${first} ${last}!`);
}

// ...and later on, can tell us if we forgot to provide one.
greetPerson("Josh Goldberg");
