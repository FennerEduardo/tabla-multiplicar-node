
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear()

console.log(argv);


// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// const base = 10;

crearArchivo(argv.b, argv.h,  argv.l).
    then(nombreArchivo => console.log(nombreArchivo, 'creado'.random)).
    catch(err => console.log(err));
