class Hero{
    constructor(character, age, type, attack) {
     this.character = character
     this.age = age
     this.type = type
     this.attack = attack
}  

     toString(){
    console.log(`O ${this.type} Supremo ${this.character} de ${this.age} Anos Atacou Usando ${this.attack}`)

     }
       
     }


let newHero1 = new Hero ("Harry", 200, "Mago", "Magia")
let newHero2 = new Hero ("Luan", 30, "Guerreiro", "Espada")
let newHero3 = new Hero ("Zaluen Gucubres", 100, "Monge", "Artes Marciais")
let newHero4 = new Hero ("Jackie Chan", 18, "Ninja", "shuriken")
newHero1.toString()
newHero2.toString()
newHero3.toString()
newHero4.toString()
