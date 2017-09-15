"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const produto_1 = require("../../src/domain/produto");
describe('Produto', () => {
    var nome = 'nome';
    var descricao = 'descricao';
    it('deve criar um produto', () => {
        var preco = 10.5;
        var produto = new produto_1.Produto(nome, descricao, preco);
        chai_1.assert.equal(nome, produto.nome);
        chai_1.assert.equal(descricao, produto.descricao);
        chai_1.assert.equal(preco, produto.preco);
    });
    it('deve estar na promocao quando preço do produto for 19', () => {
        var preco = 19;
        var produto = new produto_1.Produto(nome, descricao, preco);
        chai_1.assert.equal(true, produto.estaNaPromocao);
    });
});
//# sourceMappingURL=productTest.js.map