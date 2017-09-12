"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const produto_1 = require("../../src/domain/produto");
describe('Produto', () => {
    it('deve criar um produto', () => {
        var nome = 'nome';
        var descricao = 'descricao';
        var preco = 10.5;
        var produto = new produto_1.Produto(nome, descricao, preco);
        chai_1.assert.equal(nome, produto.nome);
        chai_1.assert.equal(descricao, produto.descricao);
        chai_1.assert.equal(preco, produto.preco);
    });
});
//# sourceMappingURL=productTest.js.map