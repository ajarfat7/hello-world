function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making three dictionaries representing different albums
var album1 = make_album("Linkin Park", "Meteora");
var album2 = make_album("Eminem", "The Marshall Mathers LP", 18);
var album3 = make_album("Taylor Swift", "1989", 16);
// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
