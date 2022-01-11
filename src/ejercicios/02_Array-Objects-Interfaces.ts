let habilidades: (boolean | string | number)[]= ['bash', 'counter', 'healing', 100];
let capacidades: string[]= ['bash', 'counter', 'healing'];

interface Personaje {
    nombre: String;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje= {
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
}

console.table(personaje);