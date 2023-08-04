import { Component, OnInit } from '@angular/core';
import profitable from './profitable.json'
import reportJsonData from './progressReport.json'
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  checkEvent:string="Today"; 

  cardArray :any= profitable;

  reprtJson : any = reportJsonData
  reportData : any = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  constructor(){}
  customCssClass:string='abhi';
  ngOnInit(): void {
    
  }
  takeEvent(event:any){
    this.checkEvent=event.tab.textLabel
 }


 
}
