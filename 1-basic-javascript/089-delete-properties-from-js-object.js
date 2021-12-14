/*
Delete Properties from a JavaScript Object:
Delete the tails property from myDog. You may use either dot or bracket notation.

- You should delete the property tails from myDog.
- You should not modify the myDog setup.
 */
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only changed code below this line
delete myDog.tails;