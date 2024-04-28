
let favoritePizzas: string[] = ["Margherita", "Pepperoni", "Vegetarian"];


console.log("My favorite pizzas are:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

console.log("\nStatements about my favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\nI really love pizza!");
