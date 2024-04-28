let users: string [] = ["Arfat" , "Sheeraz" ,"Hamdan" , "Hassan"];

 
for (let user of users) {
if (user === "admin") {

    console.log("Hello admin, would you like to see a status report?");
} else  {
    console.log (`hello ${user}, welcomeback!`);
}
}
