interface Box<T> {
    contents: T;
    label: string;
}

function logBox<T>(box: Box<T>) {
    console.log(`${box.label} contains ${JSON.stringify(box.contents)}`);
}

// TypeScript can infer that 'boxWithString' satisfies 'Box<string>', so T is 'string'.
const boxWithString = {
    contents: "peanuts",
    label: "Contains Peanuts"
};
logBox(boxWithString);

// Here, logBox resolves the T to 'number', because that's the type of 'contents'.
logBox({
    contents: 3.14,
    label: "Contains Pi"
});

// Generics can be whatever you want them to be.
// Here, the 'T' type is Box<boolean>, so the parameter is Box<Box<boolean>>.
const truthBox: Box<boolean> = {
    contents: true,
    label: "True!"
}
logBox({
    contents: truthBox,
    label: "Recursion?"
});
