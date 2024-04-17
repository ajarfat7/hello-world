let guests: string []= ["Ali" , "Haider" , "Aamir" , "Bilal"]; 
console.log("Original guest list:");
for (let guest of guests) {
    console.log(guest);
}
guests.push("Aliyan", "Hamza", "Zeeshan");
console.log("\nNew guest list with three more guests:");
for (let guest of guests) {
    console.log(guest);
}
console.log("\nWe found a bigger dinner table!");
guests.push("Moosa")
console.log("New guest invite in dinner")
for (let guest of guests) {
    console.log(guest);
}
while (guests.length > 4) {
let removeguest = guests.pop();
console.log(`Sorry, ${removeguest}, we can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.pop();
guests.pop();

console.log("Guest list:", guests);
