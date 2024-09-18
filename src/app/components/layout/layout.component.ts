import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectiveComponent } from '../directive/directive.component';
import { AttDirectiveComponent } from '../att-directive/att-directive.component';
import { AlertComponent } from '../sharedComponent/alert/alert.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent,DirectiveComponent,AttDirectiveComponent,RouterLink,AlertComponent],

  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router=inject(Router);

  onLogout(){
    localStorage.removeItem('loginuser');
    this.router.navigateByUrl('login');


  }

}
