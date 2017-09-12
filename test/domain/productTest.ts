import { assert } from 'chai';
import { Produto } from '../../src/domain/produto';

describe('Produto', () => {

    it('deve criar um produto', () => {

        var nome = 'nome';
        var descricao = 'descricao';
        var preco = 10.5;
        var produto = new Produto(nome, descricao, preco);

        assert.equal(nome, produto.nome);
        assert.equal(descricao, produto.descricao);
        assert.equal(preco, produto.preco);
    });
});
