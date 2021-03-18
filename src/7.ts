interface Success<T> {
    data: T;
    succeeded: true;
}

interface Failure {
    error: Error;
    succeeded: false;
}

function logResult<T>(result: Success<T> | Failure) {
    // Property 'data' does not exist on type 'Failure | Success<T>'.
    //   Property 'data' does not exist on type 'Failure'.
    // Again, we've forgotten to check the result status
    // TypeScript knows that 'data' might not exist if the result is a failure.
    console.log(result.data);

    // If we "narrow" the type based on its 'succeeded' member...
    if (result.succeeded) {
        // ...then when succeeded is true, we know it has to be the 'Success<T>' form!
        // So result.data must exist.
        console.log(`Succeeded 🤩! ${result.data}`);
    } else {
        // Otherwise, if succeeded is false, then it has to be the 'Failure' form.
        // So result.error must exist.
        console.log(`Failed 😢... ${result.error}`);
    }
}

// Typing out the whole 'Success<T> | Failure' can get tiresome.
// This "type alias" feature lets us
type Result<T> = Success<T> | Failure;

function logResults<T>(results: Result<T>[]) {
    results.forEach(logResult);
}

// TypeScript's inferences can be powerful.
// Here, it's inferred logResult's <T> to be string.
logResults([
    {
        data: "Hooray",
        succeeded: true
    },
    {
        error: new Error("Aww..."),
        succeeded: false
    },
    // ...and if we mess up the discriminant for a type, it says so.
    {
        data: "Hooray!... question mark?",
        succeeded: false
    }
]);
