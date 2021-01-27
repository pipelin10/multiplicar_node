//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log(data.trap);
            })
            .catch(err => {
                console.log(err);
            });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombreArchivo => {
                console.log(`Archivo creado: ${colors.random(nombreArchivo)}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;

    default:
        console.log('Comando no reconocido');
        break;

}