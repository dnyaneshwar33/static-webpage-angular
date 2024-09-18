import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-att-directive',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './att-directive.component.html',
  styleUrl: './att-directive.component.css'
})
export class AttDirectiveComponent {

  divBgColor: string = 'bg-primary';

  makeDivBlue() {
    this.divBgColor = 'bg-info'
  }

  isDivActive: boolean = false;

  makeDivRed() {
    this.divBgColor = 'bg-danger'
  }
  toggleDivColor() {
    this.isDivActive = !this.isDivActive
  }

  students = [{
    name: "Vd", City: "Mumbai", isActive: true,marks:33
  },
  {
    name: "Chotu", City: "Pune", isActive: true,marks:53
  },
  {
    name: "Shubyaa", City: "Nashik", isActive: false,marks:87
  },
  {
    name: "Anish", City: "Dubai", isActive: true,marks:12
  },
  {
    name: "Sagar", City: "Satara", isActive: false,marks:46
  },

  ]
}
