# CYPRESS-CUCUMBER-2023

## Configuración de Cypress

En este archivo de configuración de Cypress, se establecen diversas opciones y parámetros para personalizar el comportamiento de las pruebas automatizadas.

### Importaciones

Las siguientes importaciones son utilizadas para importar módulos y funciones requeridas:

- `defineConfig`: Importa la función `defineConfig` de la biblioteca "cypress", que se utiliza para definir la configuración de Cypress.
- `createBundler`: Importa la función `createBundler` del módulo "@bahmutov/cypress-esbuild-preprocessor", que se utiliza para configurar el preprocesamiento de archivos.
- `addCucumberPreprocessorPlugin`: Importa la función `addCucumberPreprocessorPlugin` del módulo "@badeball/cypress-cucumber-preprocessor", que permite agregar el preprocesador necesario para archivos Cucumber.
- `createEsbuildPlugin`: Importa la función `createEsbuildPlugin` del módulo "@badeball/cypress-cucumber-preprocessor/esbuild", que configura la integración de Esbuild con el preprocesador.

### Opciones de Configuración

- `"video": false`: Desactiva la grabación de videos durante la ejecución de las pruebas.
- `"nonGlobalStepDefinitions": true`: Configura las definiciones de pasos de Cucumber como no globales.
- `pageLoadTimeout: 30000`: Establece el tiempo máximo de espera para la carga de páginas en milisegundos.

### Configuración de Ejecución

La configuración `e2e` contiene opciones relacionadas con la ejecución de las pruebas:

- `specPattern`: Define los patrones de archivo para las pruebas. Aquí se especifican tanto los archivos de características de Cucumber ("**/*.feature") como los archivos de pruebas Cypress ("**/*.cy.js").
- `setupNodeEvents`: Una función asincrónica que configura eventos de nodo para preprocesar los archivos y establecer la configuración necesaria. Se utiliza el preprocesador de Cucumber, el bundler y Esbuild.

El archivo también incluye un ejemplo alternativo de configuración comentado que utiliza el módulo "cypress-cucumber-preprocessor" de manera diferente para configurar las definiciones de pasos.

En resumen, este archivo define opciones y configuraciones clave para ejecutar pruebas automatizadas utilizando Cypress y Cucumber, incluyendo el preprocesamiento de archivos y la configuración de las definiciones de pasos.