var guests = ["Ali", "Haider", "Aamir", "Bilal"];
console.log("Original guest list:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log(guest);
}
guests.push("Aliyan", "Hamza", "Zeeshan");
console.log("\nNew guest list with three more guests:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log(guest);
}
console.log("\nWe found a bigger dinner table!");
guests.push("Moosa");
console.log("New guest invite in dinner");
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log(guest);
}
while (guests.length > 4) {
    var removeguest = guests.pop();
    console.log("Sorry, ".concat(removeguest, ", we can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.pop();
guests.pop();
console.log("Guest list:", guests);
