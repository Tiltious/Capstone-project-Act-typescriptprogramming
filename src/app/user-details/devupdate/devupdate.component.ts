import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/devices.service';
import { GetValidationService } from 'src/app/get-validation.service';

@Component({
  selector: 'app-devupdate',
  templateUrl: './devupdate.component.html',
  styleUrls: ['./devupdate.component.css']
})
export class DevupdateComponent implements OnInit {
  mydev=new Devices('','','','')
  devcontrol:any
  updatetoggle:boolean
  constructor(private device:DevicesService,
    private validator:GetValidationService) { 
  }

  ngOnInit(): void {
    this.device.selecteddev.subscribe((dev:any)=>{
      this.mydev=dev

      this.devcontrol=new FormGroup({
        sn:new FormControl(this.mydev.sn,[Validators.maxLength(255),this.validator.devval(this.device.mydevices),Validators.required]),
        description:new FormControl(this.mydev.description,[Validators.maxLength(255),Validators.required]),
        type:new FormControl(this.mydev.type,[Validators.pattern('^[0-9]*$'),Validators.required])
      })

    })
  }

  formReset(){
    this.devcontrol.reset()
  }
  deleteDevice(id:string){
    this.device.deleteDevice(id)
    console.log(id)
    alert('device removed')
  }
  editDevice(device:Devices){
    this.device.editDevice(device.id,this.devcontrol.value)
    alert('Update Complete')
  }
}
