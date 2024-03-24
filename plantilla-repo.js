#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

async function main() {
  const exampleRepo = process.argv[3];
  const examplePath = process.argv[5];
  const projectName = process.argv[6];

  // Clonar el repositorio remoto
  execSync(`git clone ${exampleRepo} temp-project`);

  // Copiar la estructura del proyecto base al directorio del nuevo proyecto
  fs.copySync(path.join('temp-project', examplePath), projectName);

  // Eliminar el repositorio clonado temporal
  fs.removeSync('temp-project');

  console.log(`¡Proyecto "${projectName}" creado con éxito!`);
}

main().catch(error => console.error(error));