import { Component,OnInit, } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { Client } from '../models/client.model';
import { ClientesService } from '../services/client.service';
import { GenericResponse } from '../models/genericResponse.model';
import { FormControl,Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-cliente-component',
  templateUrl: './cliente-component.component.html',
  styleUrls: ['./cliente-component.component.css']
})
export class ClienteComponentComponent implements OnInit {
 
  cedulactr=new FormControl('',[Validators.required,
    Validators.pattern(/^[1-9]/),Validators.maxLength(10) ]);
  lstClient!:Client[];
  chargeContent=true;
  page=1;
  cantity=10;
  pageInit=1;  
  cedula='';
  totalrecords!:number;
  totalPages!:number;
  valor!:number;
  public dataSource:any="";
  displayedColumns:string[]=[
   'cedula',
   'nombre_Completo',
   'fecha_Pago',
   'monto'
  ]
 
   public constructor(private clientService:ClientesService,
                      public dialog: MatDialog,
                      private alert:AlertService){}
      
                       
      
   ngOnInit(): void {
   this.getCedula
   }
 
   public getCedula(event:Event){
    event.preventDefault;      
    this.getPage(this.cedula+this.cedulactr.value,this.page,this.cantity)
  
   }

   public getPage(cedula:string,page:number,cantity:number){
     this.clientService.getClients(cedula,page,cantity)
     .subscribe((data=new GenericResponse())=>{    
      if(data.operationSucces){
        
         this.lstClient=data.objectResponse
         this.totalrecords=data.totalRecords
         this.dataSource=new MatTableDataSource<Client>(
           this.lstClient
         );
         this.chargeContent=false
         this.totalPages=Math.ceil(this.totalrecords/this.cantity)
       }
       else{
       
        this.alert.setOptions({
          title:"Error",
          text:"No existen registros para esta busqueda",
          icon:"error",
          confirmButton:"btn"
        });
        this.alert.alert();
       
       }
     })
   } 
 
}
