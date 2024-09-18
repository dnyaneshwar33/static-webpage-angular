import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj:any={
    usrname:'',
    pass:''
  }
   
  router=inject(Router);

  loginUseer(){
    if(this.userObj.usrname=='admin'&&this.userObj.pass=='1234'){
      console.log(this.userObj.username);
      console.log(this.userObj.pass);

      alert("Login Success");
      localStorage.setItem('loginuser',this.userObj.usrname);
      this.router.navigateByUrl('databinding');

    }
    else{
      console.log(this.userObj.username);
      console.log(this.userObj.pass);
      alert("Login Failed");
    }

  }

}
