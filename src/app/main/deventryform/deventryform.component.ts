import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from 'src/app/devices.service';
import { EmployeesService } from 'src/app/employees.service';
import { GetValidationService } from 'src/app/get-validation.service';

@Component({
  selector: 'app-deventryform',
  templateUrl: './deventryform.component.html',
  styleUrls: ['./deventryform.component.css']
})
export class DeventryformComponent implements OnInit {
  mydevices:any[]=[]
  devassign:any
  @Input() emp:any
  constructor(
    private devservice:DevicesService,
    private validator:GetValidationService
  ) { }
  devcontrols=new FormGroup({
    sn:new FormControl('',[Validators.pattern('^[0-9]*$'),Validators.maxLength(255),this.validator.devval(this.devservice.mydevices),Validators.required]),
    description:new FormControl("",[Validators.maxLength(255),Validators.required]),
    type:new FormControl('',[Validators.pattern('^[0-9]*$'),Validators.required])
  })
  
  ngOnInit(): void {
    this.mydevices=this.devservice.mydevices

  }

  formReset(){
    this.devcontrols.reset()
  }
  addDevice(emp:any){
    this.devservice.publishDevice(this.devcontrols.value,emp)
    this.formReset()
  } 

  toggle:boolean=true
  toggledevform(){
    this.toggle=!this.toggle
  }

}
