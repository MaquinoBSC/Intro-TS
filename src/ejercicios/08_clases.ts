class PersonaNormal {

    constructor(public nombre: string, public direccion: string){

    }
}

class Heroe extends PersonaNormal{ //Alvance o visibilidad de los mismos
    // private alterEgo: string; //visible dentro de esta clase
    // public edad: number; // afuera de la clase de puede ver la propiedad
    // static nombreReal: number //podemos acceder a la propiedad sin tener que instanciar la clase

    constructor( public alterEgo: string, public edad: number, public nombreReal: string){
        super( nombreReal, 'New York, USA');
    }
}

const ironman= new Heroe('Ironman', 45, 'Tony');
console.log(ironman);