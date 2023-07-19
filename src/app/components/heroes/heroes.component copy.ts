import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:any[]=[];

  constructor(private heroesService:HeroesService){
}
ngOnInit(): void{
  this.heroes=this.heroesService.getHeroes();
  console.log(this.heroes);
}
}
