// Make a list of current users
var current_users = ["user1", "user2", "user3", "user4", "user5"];
// Make a list of new users
var new_users = ["user6", "user7", "user8", "user1", "user2"];
// Convert current_users list to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
// Check if each new username is unique
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
