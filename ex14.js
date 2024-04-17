var FriendInvite = ["Ali", "Haider", "Aamir", "Bilal"];
var CanNOTattend = "bilal";
console.log('"bilal" can’t make the dinner');
var Newinvited = "Sameer";
FriendInvite[FriendInvite.indexOf(CanNOTattend)] = Newinvited;
console.log(FriendInvite);
FriendInvite.map(function (item) { return console.log("come to my home at night", item); });
