import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {

  loggedUserName:string="Dnyaneshwar";
  isUserLogeed:boolean=true;

  isApiLoad:boolean=false;

  constructor(private http:HttpClient){}

  usersList:any[]=[];

 
  getAllUsers(){
    this.isApiLoad=true;

    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      // debugger;
      this.usersList=result;
      this.isApiLoad=false;
    })
  }

}
