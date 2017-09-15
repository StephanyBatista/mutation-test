import { assert } from 'chai';
import { Produto } from '../../src/domain/produto';

describe('Produto', () => {

    var nome = 'nome';
    var descricao = 'descricao';
    var preco = 10.5;

    it('deve criar um produto', () => {

        
        var produto = new Produto(nome, descricao, preco);

        assert.equal(nome, produto.nome);
        assert.equal(descricao, produto.descricao);
        assert.equal(preco, produto.preco);
    });

    it('deve alterar nome do produto', () => {
        
        var novoNome = 'nome 2';
        var produto = new Produto(nome, descricao, preco);

        produto.alterarNome(novoNome);

        assert.equal(novoNome, produto.nome);
    });

    it('deve estar na promocao quando preço do produto for 19', () => {

        var preco = 19;
        var produto = new Produto(nome, descricao, preco);

        assert.equal(true, produto.estaNaPromocao);
    });
});
