# Ropaviva

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



recordar que en la configuracion de Angular.json debe haber esto."styles": [              
              "node_modules/bootstrap-icons/font/bootstrap-icons.css",
              "src/styles.scss"
            ],
            "stylePreprocessorOptions": {
            "includePaths": [
              "node_modules"
            ]
          },
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]

Para poder "jugar" con los colores de bootstrap hay que hacer esto en el archivo styles.scss

// Importar funciones de Bootstrap
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
// Definir los colores personalizados
$custom-colors:(
  "cyan":    #9cdbff,
  "teal":    #20c997,
  "green":   #28a745,
  "yellow":  #ffc107,
  "pink":    #e83e8c,
  "red":     #dc3545,
  "orange":  #fd7e14,
  "purple":  #6f42c1,
  "indigo":  #6610f2,
  "blue":    #007bff
);
$theme-colors:map-merge($theme-colors,$custom-colors);

// Importar el resto de Bootstrap
@import "bootstrap/scss/bootstrap";

Hay que tener la devdependencia 

// Importar funciones de Bootstrap
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
// Definir los colores personalizados
$custom-colors:(
  "cyan":    #9cdbff,
  "teal":    #20c997,
  "green":   #28a745,
  "yellow":  #ffc107,
  "pink":    #e83e8c,
  "red":     #dc3545,
  "orange":  #fd7e14,
  "purple":  #6f42c1,
  "indigo":  #6610f2,
  "blue":    #007bff
);
$theme-colors:map-merge($theme-colors,$custom-colors);

// Importar el resto de Bootstrap
@import "bootstrap/scss/bootstrap";

y las dependencias de boostrap
