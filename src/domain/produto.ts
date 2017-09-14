import { DomainException } from './DomainException';

export class Produto{
    
    private readonly _nome : string;
    public get nome() : string {
        return this._nome;
    }
    
    private readonly _descricao : string;
    public get descricao() : string {
        return this._descricao;
    }
    
    private readonly _preco : number;
    public get preco() : number {
        return this._preco;
    }

    public get estaNaPromocao() : boolean {
        return this._preco < 20;
    }

    constructor(nome: string, descricao: string, preco: number) {
        
        DomainException.when(!nome || nome == '', "Nome é obrigatório");
        
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
    }
}
