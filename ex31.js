var users = [];
if (users.length > 0) { // Check if users array is not empty
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", welcome back!"));
        }
    }
}
else {
    console.log("We need to find some users!"); // Print message if users array is empty
}
