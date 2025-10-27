"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = exports.AlunoIntercambio = exports.AlunoGraduado = exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, id, limiteEmprestimos) {
        this.nome = nome;
        this.id = id;
        this.limiteEmprestimos = limiteEmprestimos;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
var AlunoGraduado = /** @class */ (function (_super) {
    __extends(AlunoGraduado, _super);
    function AlunoGraduado(nome, id, ra) {
        var _this = _super.call(this, nome, id, 3) || this; // limite padrão de 3 livros
        _this.ra = ra;
        return _this;
    }
    return AlunoGraduado;
}(Usuario));
exports.AlunoGraduado = AlunoGraduado;
var AlunoIntercambio = /** @class */ (function (_super) {
    __extends(AlunoIntercambio, _super);
    function AlunoIntercambio(nome, id, ra) {
        var _this = _super.call(this, nome, id, 2) || this; // limite padrão de 2 livros
        _this.ra = ra;
        return _this;
    }
    return AlunoIntercambio;
}(Usuario));
exports.AlunoIntercambio = AlunoIntercambio;
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, id, departamento) {
        var _this = _super.call(this, nome, id, 10) || this; // limite padrão de 10 livros
        _this.departamento = departamento;
        return _this;
    }
    return Professor;
}(Usuario));
exports.Professor = Professor;
