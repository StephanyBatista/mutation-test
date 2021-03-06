"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DomainException_1 = require("./DomainException");
class Produto {
    get nome() {
        return this._nome;
    }
    get descricao() {
        return this._descricao;
    }
    get preco() {
        return this._preco;
    }
    get estaNaPromocao() {
        return this._preco < 20;
    }
    constructor(nome, descricao, preco) {
        DomainException_1.DomainException.when(!nome || nome == '', "Nome é obrigatório");
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
    }
}
exports.Produto = Produto;
//# sourceMappingURL=produto.js.map