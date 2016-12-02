define(["require", "exports", "./my-component"], function (require, exports, component) {
    "use strict";
    var mdl = angular.module("myApp", []);
    mdl.component('myComponent', component.myComponent);
    angular.bootstrap(document, ['myApp']);
});
//
// 
//# sourceMappingURL=app.js.map