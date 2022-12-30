export class GenericResponse{
    operationSucces:boolean;
    errorMessage:string;
    objectResponse:any;
    totalRecords!:number;
    countRecords!:number;
    constructor(){
        this.operationSucces=true;
        this.errorMessage="";        

    }
}