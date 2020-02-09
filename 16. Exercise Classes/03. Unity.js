class Rat {
    rats= []
    constructor(name){
        this.name = name
    }
    toString(){
        console.log(this.name)
        this.rats.map(x=>{
            console.log(`${rat.name}`)
        })

    }
    unite(maybeRat){
        if (maybeRat instanceof Rat){
            this.rats.push(maybeRat)
        }
    }
        getRats() {
            return this.rats
        }
}


let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
