const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:"Es la base de la tabla de multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    dafault: false,
    describe:"Lista de la tabla o no"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    dafault: 10,
    describe:"cantidad de multiplicaciones a obtener"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw `${argv.b} Tiene que ser un numero`;
    }
    return true;
  })
  .argv;

module.exports = argv;
