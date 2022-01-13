import { Producto, calculaISV } from './06_desestructuracion-argument';


const carritoCompras: Producto[]= [
    {
        des: 'Telefono 1',
        precio: 150,
    },
    {
        des: 'Telefono 2',
        precio: 350,
    }
];

const [total, isv]= calculaISV(carritoCompras);

console.log(total);
console.log(isv);