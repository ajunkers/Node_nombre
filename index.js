const chalk = require('chalk');
const guardarSaludo = require("./utilidades/archivos.js");

const arguments = process.argv.slice(2);
const [parametro, valor] = arguments[0].split(["="])

if (parametro === "--nombre") {
  guardarSaludo(valor);
} else {
  console.log(chalk.yellow('No se encuentra el parametro.'));
  process.exit(1);
}

