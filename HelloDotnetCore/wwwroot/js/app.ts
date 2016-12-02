import * as component from "./my-component";

declare var angular: any;

let mdl = angular.module("myApp", []);

mdl.component('myComponent', component.myComponent);

angular.bootstrap(document, ['myApp']);

//
//