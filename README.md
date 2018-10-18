[![Build Status](https://travis-ci.org/maguero/planning-poker.svg?branch=master)](https://travis-ci.org/maguero/planning-poker)
[![Coverage Status](https://coveralls.io/repos/github/maguero/planning-poker/badge.svg?branch=master)](https://coveralls.io/github/maguero/planning-poker?branch=master) 
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2a5b470102ce4f029d5d3787f5897765)](https://www.codacy.com/app/maguero/planning-poker?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=maguero/planning-poker&amp;utm_campaign=Badge_Grade)


# Open Planning Poker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. (or use `ng serve --o`)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Step list to upgrade to Angular v6.1.9
Uninstall current angular/cli version (Globablly)
```
cd <folder outside project>
npm uninstall -g @angular/cli
npm cache verify
```

Install angular/cli version 6.2.4 (Globablly)
```
npm install -g @angular/cli@latest
```
Veryfe version has been installed
```
ng -v
```

Uninstall current angular/cli version (Locally)
```
cd <project version>
npm uninstall @angular/cli
npm cache verify
```

Install angular/cli version 6.2.4 (Locally)
```
npm install @angular/cli@latest
```

Clean previous dependencies and generated files
```
rm -rf node_modules dist
```

Run install again to refresh all dependencies
```
npm install
```

For further details on upgrade step by steps <br>
[YouTube example](https://www.youtube.com/watch?v=ScaKGrW5s0I) <br>
[Angular Official Upgrade Site](https://update.angular.io/) <br>
[Angular/cli](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#updating-angular-cli)

