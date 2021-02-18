import { HttpClient } from '@angular/common/http';
import { Injectable, Output , EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { concat } from 'rxjs';
import { DeviceAssignment } from './device-assignment';
import { Devices } from './devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  @Output() selecteddev=new EventEmitter<Devices>()
  @Output() selectedassign=new EventEmitter<DeviceAssignment>()

  constructor(private dhttp:HttpClient) { 
    this.getDevices()
    this.getAssignment()
  }

  mydevices:Devices[]=[]

  getDevices(){
    this.dhttp.get('https://capstone-7afbf-default-rtdb.firebaseio.com/Devices.json')
    .subscribe((devices:any)=>{
      for(let key in devices){
        this.mydevices.push(
          new Devices(key,devices[key].sn,devices[key].description,devices[key].type)
        )
      }
      this.selecteddev.emit(this.mydevices[0])
    })
  }
  assignments:any[]=[]
  getAssignment(){
    this.dhttp.get('https://capstone-7afbf-default-rtdb.firebaseio.com/DeviceAssignment.json').subscribe(
      (devassignments:any)=>{
        for(let key in devassignments){
          this.assignments.push(
            new DeviceAssignment(key,devassignments[key].employee_id,devassignments[key].device_id)
          )}
      })
  }
  publishDevice(value:any,emp:any){
    this.dhttp.post('https://capstone-7afbf-default-rtdb.firebaseio.com/Devices.json',value).subscribe(
      (data:any)=>{
        console.log(data.name,"oka")
        this.mydevices.push(
          new Devices(data.name,value.sn,value.description,value.type)
        )
        let x={employee_id:emp.id,device_id:data.name}
        this.publishAssignment(x)
      }
    )
  }
  asskeys:any[]=[]
  publishAssignment(ass:any){
    this.dhttp.post('https://capstone-7afbf-default-rtdb.firebaseio.com/DeviceAssignment.json',ass).subscribe(
      (data:any)=>{
        this.assignments.push(
          new DeviceAssignment(data.ass_id,ass.employee_id,ass.device_id)
        )
        console.log(data,"ok")
       }
    )
  }

  deleteDevice(id:string){
    this.dhttp.delete('https://capstone-7afbf-default-rtdb.firebaseio.com/Devices/'+id+'.json').subscribe(
      ()=>{
          this.mydevices.splice(this.mydevices.findIndex(function(device){
          
          return device.id==id
        }),1)
        this.selecteddev.emit(this.mydevices[0])
        console.log(this.mydevices[0],'ax')
      }
    )
    let assid=this.assignments.findIndex((ass)=>{
      return ass.device_id==id
    })
    console.log(assid,'assid')
    console.log('ax',this.assignments[assid].ass_id,'ax')
    this.deleteAssignment(this.assignments[assid].ass_id)
  }
  deleteAssignment(assid:string){
    console.log(assid)
    this.dhttp.delete('https://capstone-7afbf-default-rtdb.firebaseio.com/DeviceAssignment/'+assid+'.json').subscribe(
      ()=>{
        this.assignments.splice(this.assignments.findIndex(function(assign){
        return assign.ass_id==assid
        }),1)
      }
    )
    console.log('ax ax')
  }

  editDevice(id:string,value:any){
    this.dhttp.put('https://capstone-7afbf-default-rtdb.firebaseio.com/Devices/'+id+'.json',value)
    .subscribe((data:any)=>{
      this.mydevices.splice(this.mydevices.findIndex(function(device){
        console.log(device.id)
        return device.id===id
      }),1)

      let newdev= new Devices(data.id,value.sn,value.description,value.type)
      this.mydevices.push(newdev)
      this.selecteddev.emit(newdev)
    })
  }
  devAssign(emp_id:any){
    let assq=this.assignments.filter(
      (ass:any)=>{
        return ass.employee_id===emp_id
      }
    )
    return assq
  }

  devDisplay(devs:any){
    let back:any[]=[]
    for(let key of devs){
      let devq=this.mydevices.findIndex(
        (dev:any)=>{
          return key.device_id===dev.id
      })
      back.push(devq)
    }
    return back
  
  }
  
  


}
