import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
       public name : string = 'iroman'
       public age: number = 45;

       get capitalizedName():string {
         return this.name.toUpperCase();
       }

       getHeroDescription():string {
        return `${this.name} - ${this.age}`;
       }

changeHero():void{
    this.name='Deepool';
}
changeAge():void{
  this.age=35;
}
reset(){
  this.age=45;
  this.name='iroman';
 // document.querySelector('h1')!.innerHTML='<h1>Desde Angular</h1>';
}

}
