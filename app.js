const { crearArchivo } = require("./helpers/multiplicar");
const argv =  require('./config/yargs');
require('colors');

// console.log(process.argv)
console.log(argv)

const base = argv.base
const list = argv.l
const amount = argv.h
// console.log(base)


// ----------------------------------------------------------------
// ----------Metodo sin llibrerias--------------------------------
// ----------------------------------------------------------------
// const [arg1,arg2,arg3 ] = process.argv
// const [,base] = arg3.split("=")

crearArchivo(base, list, amount)
  .then((name) => console.log(`creado el archivo ${name}`))
  .catch((err) => console.log(err));
