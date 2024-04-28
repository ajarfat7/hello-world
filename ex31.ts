let users: string[] = []; 

if (users.length > 0) { // Check if users array is not empty
    for (let user of users) {
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${user}, welcome back!`);
        }
    }
} else {
    console.log("We need to find some users!"); // Print message if users array is empty
}
