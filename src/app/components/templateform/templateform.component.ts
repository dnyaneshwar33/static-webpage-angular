import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {
  students:any={
    firstname:'',
    lastname:'',
    uname:'',
    city:'',
    state:'',
    zip:'',
    isAgreeTerms:true

  }

  formsValue:any;

  onSubmit(){
    debugger;
    this.formsValue=this.students;
  }
  onReset(){

    this.students={
      firstname:'',
      lastname:'',
      uname:'',
      city:'',
      state:'',
      zip:'',
      isAgreeTerms:true
  
    }

  }

}
