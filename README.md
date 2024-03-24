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

Por lo tanto, siguiendo con el ejemplo anterior, si queremos crear un proyecto con Express y MongoDB, debemos ejecutar:
```bash
npx planitlla-repo --example "https://github.com/usuario/repo-con-las-plantillas" --example-path "plantilla-express-mongodb" mi-proyecto-express-mongo
```