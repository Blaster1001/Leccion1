import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:Heroe[]=[];

  constructor(private heroesService:HeroesService, private router:Router){
    
}
ngOnInit(): void{
  this.heroes=this.heroesService.getHeroes();
  console.log(this.heroes);
}
verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx])
}
}
