# plantilla-repo

`plantilla-repo` es un comando `npx` que permite crear un nuevo proyecto en por medio de una carpeta de algún repositorio existente.

###  ¿Cómo se usa?

1. Subir un repositorio en GitHub con al menos una carpeta que contenga la plantilla de algún proyecto. Por ejemplo:

    ```
    📦repositorio/
     ├── 📂plantilla-express/
     ├── 📂plantilla-express-mongodb/
     ├── 📂plantilla-express-postgresql/
     ├── 📄.gitignore
     └── 📄README.md
    ```
    > Ninguna de las plantillas de proyectos debe contener la carpeta `node_modules`.

2. Ejecutar el siguiente comando:
    ```bash
    npx planitlla-repo --example "<url repositorio remoto>" --example-path "<carpeta del repositorio remoto>" <nombre del nuevo proyecto>
    ```

3. Moverse a la directorio del nuevo proyecto y ejecutar `npm i` para instalar las dependencias necesarias.

Por lo tanto, siguiendo con el ejemplo anterior, si queremos crear un proyecto con Express y MongoDB, debemos ejecutar:
```bash
npx plantilla-repo --example "https://github.com/usuario/repo-con-las-plantillas" --example-path "plantilla-express-mongodb" proyecto-express-mongo
```

Luego nos movemos al directorio del nuevo proyecto con el comando `cd proyecto-express-mongo`, y ejecutamos el comando `npm i` para que se instalen las dependencias.