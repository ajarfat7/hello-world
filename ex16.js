var FriendInvite = ["Ali", "Haider", "Aamir", "Bilal"];
while (FriendInvite.length > 2) {
    var removedPerson = FriendInvite.pop();
    console.log("Sorry ".concat(removedPerson, ", I can't invite you to dinner."));
}
for (var _i = 0, FriendInvite_1 = FriendInvite; _i < FriendInvite_1.length; _i++) {
    var person = FriendInvite_1[_i];
    console.log("Dear ".concat(person, ", you're still invited to dinner."));
}
