import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
      heroNames:String[]=['Spiderman','Hulk','Thor','Iroman'];
      deleteHero?:String;

      removeLastHero():void{
        this.deleteHero=this.heroNames.pop();
      }
}
