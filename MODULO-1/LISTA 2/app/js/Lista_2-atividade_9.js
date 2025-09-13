var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(especie) {
        this.especie = especie;
    }
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(especie, raca) {
        var _this = _super.call(this, especie) || this;
        _this.raca = raca;
        return _this;
    }
    Cachorro.prototype.latir = function () {
        return "Au au!";
    };
    return Cachorro;
}(Animal));
// instancia
var dog = new Cachorro("Canino", "Labrador");
console.log("espécie:", dog.especie, "\nraça:", dog.raca);
console.log(dog.latir());
