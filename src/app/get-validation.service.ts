import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EmployeesService } from './employees.service';
import { ValidateService } from './validate.service';

@Injectable({
  providedIn: 'root'
})
export class GetValidationService {

  constructor(private validate:ValidateService, private emparray:EmployeesService) { }

  val(inp):ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
      
      if(!this.validate.valid(control.value,inp)){
        return {'valid': false }
      }
      
      return null
    }
  }
  devval(inp):ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
      
      if(!this.validate.devvalid(control.value,inp)){
        return {'valid': false }
      }
      
      return null
    }
  }
}
