"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const domainException_1 = require("../../src/domain/domainException");
describe('Domain Exception', () => {
    it('deve lançar exceção quando instrução for verdadeira', () => {
        var mensagem = 'mensagem';
        chai_1.assert.throws(() => { domainException_1.DomainException.when(true, mensagem); }, mensagem);
    });
});
//# sourceMappingURL=domainExceptionTest.js.map