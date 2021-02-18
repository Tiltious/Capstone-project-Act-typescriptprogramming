import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  valid(control:any,backdata:any[]):boolean{
    let x =  backdata.findIndex((bdata)=>{
      return control==bdata.emp_id
    })
    return x==-1
  }
  devvalid(control:any,backdata:any[]):boolean{
    let x =  backdata.findIndex((bdata)=>{
      return control==bdata.sn
    })
    return x==-1
  }
}
