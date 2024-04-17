let FriendInvite: string []= ["Ali" , "Haider" , "Aamir" , "Bilal"]; 
let CanNOTattend: string = "bilal";
console.log('"bilal" can’t make the dinner');
let Newinvited: string= "Sameer";
FriendInvite[FriendInvite.indexOf(CanNOTattend)]=Newinvited;
console.log( FriendInvite);
FriendInvite.map((item)=> console.log("come to my home at night",item));
