/*nombre de clase en mayuscula de entrada*/
class Pokemon {

    name = "";
    type = "";
    evoluciones = [];

    constructor(name, type, evoluciones){
        this.name = name;
        this.type = type;
        this.evoluciones = evoluciones;
    }

    set name (name){
        this.#name =name;
    }

    set type (type) {
        this.#type = type;
    }

    set evolucion (evolucion) {
        this.evolucion = evolucion;
    }
    attack() {
        return `${this.name}, esta atacando`;
    }

    evolve(evolucion = 0){
        //valida que la opcion exista
        const EVOLVE = this.evoluciones[evolucion] || '';
        let message = 'no puede evolucionar';
        
        if(EVOLVE){
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE; 
        }
        return message;

    }
}

const Charmander = new Pokemon('Charmander', 'Fire',['Charmeleon','charizar']);
const Squirtle = new Pokemon('Squirtle', 'water',['Watortle','Blastoise']);


console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evolve(1));

console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));


