import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  checkEvent:string="Today"; 
  panelOpenState = false;
  constructor(){}
  customCssClass:string='abhi';
  ngOnInit(): void {
    
  }
  takeEvent(event:any){
    this.checkEvent=event.tab.textLabel
 }
}
