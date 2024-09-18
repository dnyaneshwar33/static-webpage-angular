import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { CustpipePipe } from './custpipe.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe,TitleCasePipe,LowerCasePipe,DatePipe,JsonPipe,AsyncPipe,CustpipePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  firstName:string="Dnyaneshwar";
  lastName:string="VIGHNE";

  date= new Date();

  currentTime:Observable<Date>=new Observable<Date>;


  students={
    name:"vd",
    rollNo:76,
    city:"Mumbai",
    state:''
  }

  constructor(){
    this.currentTime=interval(1000).pipe(map(()=>new Date()));
  }

}
