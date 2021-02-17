export class Personne {
    constructor(private _num : number, private _nom: string, private _prenom:string){
    }
    public get num(){
        return this._num;
    }
    public get nom(){
        return this._nom;
    }
    public get prenom(){
        return this._prenom;
    }
    public set num(_num:number){
        this._num=_num;
    }
    public set nom(_nom:string){
         this._nom=_nom;
    }
    public set prenom(_prenom:string){
        this._prenom=_prenom;
    }
}
