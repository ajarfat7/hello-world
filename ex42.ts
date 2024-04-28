function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

let great_magicians = make_great(magicians);

show_magicians(great_magicians);
