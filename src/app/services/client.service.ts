import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { BaseRepository } from './BaseRepository';
import { GenericResponse } from '../models/genericResponse.model';
import { UrlMstClientes } from './const';


@Injectable({
    providedIn: 'root',
  })
  export class ClientesService {
    private getHeader():HttpHeaders{
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json')
      return headers
    }
    constructor(private baseRepository:BaseRepository) {}
  
    getClients(cedula:string,page:number,cantity:number):Observable<GenericResponse>{
      let url=UrlMstClientes.listClient+'/'+cedula+'/'+page+'/'+cantity
      return this.baseRepository.Request('get',url,this.getHeader())
    } 
  
  }
  
