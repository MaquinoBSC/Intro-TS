function sumar(a: number, b: number): number{
    return a+b;
};

const sumarFlecha= (a: number, b: number): number => {
    return a+b;
}

function multiplicar(numero: number, base: number, otroNumero?: number){
    return numero*base;
}

const resultado= multiplicar(10, 20);
console.log(resultado);


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: ()=> void;
}

function curarPersonaje(personaje: PersonajeLOR, curarX: number): void{
    personaje.pv+= curarX;
}

const nuevoPersonaje01: PersonajeLOR= {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: ', this.pv);
        
    }
}

curarPersonaje( nuevoPersonaje01, 20 );
nuevoPersonaje01.mostrarHp();