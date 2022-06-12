const { crearArchivo } = require('./helpers/multiplcacion');
const argv = require('./config/yargs');

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreDeArchivo => console.log(nombreDeArchivo, 'creado'))
    .catch((err) => console.log(err));

