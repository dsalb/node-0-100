require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');

//const { mostrarMenu, pausa } = require('./helpers/mensajes');



console.clear();

const main = async () => {

    let opt = '';

    do {
        
        opt = await inquirerMenu();
        //console.log(opt)

        console.log('\n')
        await pausa();
        
    } while (opt !== 0);

}

main();