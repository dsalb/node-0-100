const fs = require('fs');

let salida = '';

const crearArchivo = async (base, listar, hasta) => {
    try { 
        for (let i=1; i<=hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        };
        
        fs.writeFile(`tabla del ${base}.txt`, salida, (err) => {
            if (err) throw err;
            // console.log('Archivo creado');
        })

        if (listar) {
            console.log('=====================')
            console.log('TABLA DEL ', base)
            console.log('=====================')
            console.log(salida)            
        }
        return `tabla del ${base}.txt`;
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    crearArchivo
}
