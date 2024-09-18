import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../sharedComponent/alert/alert.component';

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [FormsModule,CommonModule,AlertComponent],
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css'
})
export class PostapiComponent {

  deptobj:any={
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  deptList:any[]=[];

  ngOnInit():void{
    this.getData();

  }

  http=inject(HttpClient);

     onSave(){
      debugger;
      this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptobj).subscribe((res:any)=>{
        debugger;
        if(res.result){
          alert("Department Created");
          this.getData();
        }
        else{
          alert(res.message);
        }
      })
     }

     getData(){
      this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
        // console.log(res.data);
        // console.log(this.deptobj.departmentName)

        // this.deptobj.departmentName=res.data[0].departmentName;
        // console.log(this.deptobj.departmentName);
        this.deptList=res.data;
        console.log(this.deptList);
      })
     }

     onEdit(data:any){
      this.deptobj=data;
     }
     onDelete(id:number){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId"+id).subscribe((res:any)=>{
        debugger;
        if(!res.result){
          alert("Deleted Created");
          this.getData();
        }
        else{
          alert(res.message);
        }
      })

     }
}
