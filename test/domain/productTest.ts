import { assert } from 'chai';
import { Produto } from '../../src/domain/produto';

describe('Produto', () => {

    var nome = 'nome';
    var descricao = 'descricao';

    it('deve criar um produto', () => {

        var preco = 10.5;
        var produto = new Produto(nome, descricao, preco);

        assert.equal(nome, produto.nome);
        assert.equal(descricao, produto.descricao);
        assert.equal(preco, produto.preco);
    });

    it('deve estar na promocao quando preço do produto for 19', () => {

        var preco = 19;
        var produto = new Produto(nome, descricao, preco);

        assert.equal(true, produto.estaNaPromocao);
    });
});
