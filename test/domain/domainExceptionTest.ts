import { assert } from 'chai';
import { DomainException } from '../../src/domain/domainException';

describe('Domain Exception', () => {

    var mensagem = 'mensagem';
    
    it('deve lançar exceção quando instrução for verdadeira', () => {

        assert.throws(() => { DomainException.when(true, mensagem); }, mensagem);
    });

    it('não deve lançar exceção quando instrução for falsa', () => {

        assert.doesNotThrow(() => { DomainException.when(false, mensagem); }, mensagem);
    });
});