import { assert } from 'chai';
import { DomainException } from '../../src/domain/domainException';

describe('Domain Exception', () => {

    it('deve lançar exceção quando instrução for verdadeira', () => {

        var mensagem = 'mensagem';

        assert.throws(()=>{ DomainException.when(true, mensagem); }, mensagem); 
    });
});