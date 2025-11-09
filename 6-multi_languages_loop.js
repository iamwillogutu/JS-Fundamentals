const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];

let output = "";
for (let i = 0; i < messages.length; i++) {
    output += messages[i] + "\n";
}

output = output.slice(0, -1);

console.log(output);
