define(["require", "exports"], function (require, exports) {
    "use strict";
    var MyComponentController = (function () {
        function MyComponentController() {
        }
        MyComponentController.prototype.$onInit = function () {
            this.persons = new Array();
            this.persons.push({ id: 1, name: 'person 1' }, { id: 2, name: 'person 2' }, { id: 3, name: 'person 3' });
        };
        return MyComponentController;
    }());
    exports.MyComponentController = MyComponentController;
    exports.myComponent = {
        controller: MyComponentController,
        templateUrl: '/js/myComponent.html'
    };
});
//# sourceMappingURL=my-component.js.map