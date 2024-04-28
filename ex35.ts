
let animals: string[] = ["Dog", "Cat", "parrot"];

console.log("These animals have a common characteristic:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about these animals:");
for (let animal of animals) {
    console.log(`I like ${animal} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");
