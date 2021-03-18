/**
 * Any object with a greet() method and name string can be a Person.
 */
interface Person {
    greet(): void;
    name: string;
}

// Spongebob matches those traits, so we allow it.
let spongebob: Person = {
    greet() {
        console.log("I'm ready!");
    },
    name: "Spongebob"
};

// This function takes in a parameter of type Person...
function takePerson(person: Person) {
    console.log(`${person.name} says...`);
    person.greet();
}

// ...which can be satisfied by an object explicitly declared as Person...
takePerson(spongebob);

// ...or any random object that just so happens to match up.
takePerson({
    greet() {
        console.log("Wumbo?");
    },
    name: "Patrick"
});

let sandy = {
    greet() {
        console.log("Texas!");
    },
    name: "Sandy"
};

takePerson(sandy);

// For the React developers in the Zoom, this is how you declare component props!

interface MyButtonProps {
    // (the question mark says it doesn't need to exist)
    disabled?: boolean;
    text: string;
}

const MyButton = ({ disabled, text }: MyButtonProps) => {
    return (
        <button disabled={disabled} type="button">
            {text}
        </button>
    );
};

const buttons = [
    <MyButton text="Click me!" />,
    <MyButton disabled text="Don't click me." />
];
