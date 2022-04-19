const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.red} ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        // console.log(`tabla-${base}.txt Creado con éxito`);
        if (listar) {
            console.log('======================'.rainbow);
            console.log('    Tabla del: '.trap, colors.green(base));
            console.log('======================'.zebra);
            console.log(consola)
        }

        return `${colors.yellow('tabla')}-${colors.green(base)}.txt`
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}