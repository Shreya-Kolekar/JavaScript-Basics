// Immediately Invoked Function Expression (IIFE)

// To execute a function immediately, in order to avoid the pollution caused by global scope

(function chai() {
    // named IIFE
    console.log(`DB connected`);
}) ();


// IIFE as arrow func

( () => {
    console.log(`DB connected TWO`);
}) ();


( (name) => {
    console.log(`DB connected THREE ${name}`);
}) ('Yayy!');