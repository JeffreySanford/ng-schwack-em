

# NgSchwackEmArament

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

This is s simple single page application design that displays a set of catagories containing products as the main function.  Standard associate web page complete the web applicaiton.

This is built (currently) on Angular 5 with the Angular/Material2 project.  It supports standard material design standards:

https://material.angular.io/

This project, as a development experiment, does not use the bootstrap framework.  Bootstrap might be included in this project in the futrue, but currently the angular material modules have allowed for enough function.

The object products will breakdown into cataogires into individual products which are routable.

The image should be able to be dynamically created using a API from Printful:
https://www.printful.com/api

The new mockup generator should be able to handle this:
https://www.printful.com/docs/generator

This will enabled a submit of text and return of an image of a shirt with the text on it.  The printful API has other consumable resoures for ordering and shipping.

#### Production

I am using pm2 to serve numerous website from imaginecreatethrive.com.

ng build --prod --build-optimizer
cd dist/
pm2 start http-server -- -p 4203 (pm2 does monitor for changes)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
