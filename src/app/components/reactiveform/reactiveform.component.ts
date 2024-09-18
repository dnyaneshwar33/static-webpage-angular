import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  studentform:FormGroup = new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(4)]),
    lastname:new FormControl(),
    username:new FormControl("",[Validators.email]),
    city:new FormControl(),
    state:new FormControl(),
    zipcode:new FormControl(),
    isAcceptedTerms:new FormControl()

  });

  formValue:any;

  onSave(){
    this.formValue=this.studentform.value;
  }


}
