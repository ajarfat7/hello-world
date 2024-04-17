let FriendInvite: string []= ["Ali" , "Haider" , "Aamir" , "Bilal"]; 
while (FriendInvite.length > 2) {
    let removedPerson: string = FriendInvite.pop()!;
    console.log(`Sorry ${removedPerson}, I can't invite you to dinner.`);
}

for (let person of FriendInvite) {
    console.log(`Dear ${person}, you're still invited to dinner.`);
}