import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  
  courseName:string="React Js";

  inputType:string="text";

  inputValue:string="demo";

  firstName=signal("Dnyaneshwar");


   onEventBind(msg:string){
    alert(msg);
   }
  
   onChangeCourse(){
    this.courseName='AngularJS';
    this.firstName.set("Its Signal")//chnagingthe value of signal by set
   }
}
