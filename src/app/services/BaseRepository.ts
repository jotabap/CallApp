import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class BaseRepository{
constructor(private http:HttpClient){}

public Request(method:string,url:string, headers:any,Body?:any): any{
if(method==='get'){
    return this.http.get<any>(url,{headers}).pipe(
        tap(response=>{
            console.log(response);
        }),
        catchError(err=>{
            console.log(err)
            return throwError(err)
        })
    )
}
}
}