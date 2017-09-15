import { DomainException } from './DomainException';

export class Produto{
    
    private _nome : string;
    public get nome() : string {
        return this._nome;
    }
    
    private _descricao : string;
    public get descricao() : string {
        return this._descricao;
    }
    
    private _preco : number;
    public get preco() : number {
        return this._preco;
    }

    constructor(nome: string, descricao: string, preco: number) {
        
        DomainException.when(!nome || nome == '', "Nome é obrigatório");
        
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
    }

    public get estaNaPromocao() : boolean {
        
        return this._preco <= 20;
    }

    public alterarNome(nome: string){

        this._nome = nome;
    }
}
