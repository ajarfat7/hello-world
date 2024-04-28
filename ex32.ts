
let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];

let new_users: string[] = ["user6", "user7", "user8", "user1", "user2"];


let current_users_lower: string[] = current_users.map(user => user.toLowerCase());


for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
