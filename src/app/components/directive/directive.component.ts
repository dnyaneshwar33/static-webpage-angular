import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isDivVisible:boolean=false;
  
  isDiv2Visible:boolean=true;

  num1Val:string='';
  num2Val:string='';

  Cities:string[]=['Pune','Mumbai','Delhi'];
  doesCityVis:boolean=true;

  students=[{
    name:"Vd",City:"Mumbai",isActive:true
  },
  {
    name:"Chotu",City:"Pune",isActive:true
  },
  {
    name:"Shubyaa",City:"Nashik",isActive:false
  },
  {
    name:"Anish",City:"Dubai",isActive:true
  },
  {
    name:"Sagar",City:"Satara",isActive:false
  },

]

  isValSame(){
    return this.num1Val==this.num2Val;
  }


  showDiv1(){
    this.isDivVisible=true;
  }

  hideDiv1(){
    this.isDivVisible=false;
  }

  toggleDiv(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }
   
  showCity(){
    this.doesCityVis=!this.doesCityVis;

  }
}
