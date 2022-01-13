interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero= {
    nombre: 'Maquino',
}

const pasajero2: Pasajero= {
    nombre: "Adali",
    hijos: ['Natalia', 'Gabriel']
}


function imprimeHijos( pasajero: Pasajero ): void {
    const cuantosHijos= pasajero.hijos?.length || 0;
    console.log(cuantosHijos);   
}

imprimeHijos(pasajero1);