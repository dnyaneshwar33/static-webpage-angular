import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { AlertComponent } from '../sharedComponent/alert/alert.component';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [CommonModule,AlertComponent],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css'
})
export class GetapiComponent {

  usersList:any []=[];

  constructor( private http:HttpClient){

  }

  ngOnInit(){
    this.getAllUsers()
  }

  getAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
      this.usersList=result;
    })
  }


}
