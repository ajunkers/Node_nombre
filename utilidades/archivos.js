const fs = require("fs");
const chalk = require("chalk");

const guardarSaludo = (nombre) => {
  const saludo = `Hola, ${nombre}. Encantado de saludarte.`;
  const path = "./textos/saludo.txt";

  fs.writeFile(path, saludo, (err) => {
    if (err) {
      console.log(chalk.red.bold("Fallo al crear el archivo."));
      process.exit(1);
    }
    console.log("File created!");
  });
};

module.exports = guardarSaludo;
