const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to determine if a number is even or odd
function isEvenOrOdd() {
    rl.question("Enter a number: ", (input) => {
        const a = Number(input); // Convert the input string to a number
        
        if (isNaN(a)) {
            console.log("Please enter a valid number.");
        } else {
            if (a % 2 === 0) {
                console.log("Number is even");
            } else {
                console.log("Number is odd");
            }
        }
        
        rl.close(); // Close the interface after processing input
    });
}

// Call the function
isEvenOrOdd();

