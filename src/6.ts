// This variable can be *either* a string *or* undefined
// Hover over it to see the type inferred as 'string | undefined'
let myNameMaybe = Math.random() > 0.5 ? "Mr. Krabs" : undefined;

function takesNameMaybe(nameMaybe: string | undefined) {
    // Error: object is possibly 'undefined'.
    console.log(nameMaybe.length);

    // TypeScript can infer that the internals of this if statement
    // may *only* be hit if nameMaybe is a string.
    if (nameMaybe) {
        // Thus, in here, nameMaybe is of type 'string', not 'string | undefined'.
        // That means asking for its length is ok.
        console.log(nameMaybe.length);
    }
}

takesNameMaybe(myNameMaybe);

// I find these unions to be particularly useful when my data might not be safe.
function logNameOrError(nameMaybe: string | Error) {
    if (typeof nameMaybe === "string") {
        console.log(`Succeeded 🤩! ${nameMaybe}`);
    } else {
        console.log(`Failed 😢... ${nameMaybe.message}`);
    }
}

// For example, if some operation might throw an error,
// I might store the result in a single variable known to be either type.
async function logCat() {
    async function getCatOrError() {
        try {
            const response = await fetch("https://aws.random.cat/meow");
            const { file } = await response.json();
            return file;
        } catch (error) {
            return error;
        }
    }

    logNameOrError(await getCatOrError());
}
