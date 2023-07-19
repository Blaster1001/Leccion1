import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

private heroes:Heroe[]=[
  {
    ciuO: "Machala",
    ciuD: "Guayaquil",
    precioR: "5$",
    desc: "Ruta con origen en Machala y destino en Guayaquil",
    tipo:"Exterior"
  },
  {
    ciuO: "Machala",
    ciuD: "Cuenca",
    precioR: "7$",
    desc: "Ruta con origen en Machala y destino en Cuenca",
    tipo:"Exterior"
  },
  {
    ciuO: "Machala",
    ciuD: "Ambato",
    precioR: "7$",
    desc: "Ruta con origen en Machala y destino en Ambato",
    tipo:"Exterior"
  },
  {
    ciuO: "Guayaquil",
    ciuD: "Cuenca",
    precioR: "5$",
    desc: "Ruta con origen en Guayaquil y destino en Cuenca",
    tipo:"Exterior"
  },
  {
    ciuO: "Guayaquil",
    ciuD: "Ambato",
    precioR: "5$",
    desc: "Ruta con origen en Guayaquil y destino en Ambato",
    tipo:"Exterior"
  },
  {
    ciuO: "Guayaquil",
    ciuD: "Machala",
    precioR: "5$",
    desc: "Ruta con origen en Guayaquil y destino en Machala",
    tipo:"Exterior"
  },
  {
    ciuO: "Ambato",
    ciuD: "Guayaquil",
    precioR: "5$",
    desc: "Ruta con origen en Ambato y destino en Guayaquil",
    tipo:"Exterior"
  },
  {
    ciuO: "Ambato",
    ciuD: "Cuenca",
    precioR: "7$",
    desc: "Ruta con origen en Ambato y destino en Cuenca",
    tipo:"Exterior"
  },
  {
    ciuO: "Ambato",
    ciuD: "Machala",
    precioR: "7$",
    desc: "Ruta con origen en Ambato y destino en Machala",
    tipo:"Exterior"
  },
  {
    ciuO: "Machala",
    ciuD: "Pasaje",
    precioR: "2$",
    desc: "Ruta con origen en Machala y destino en Pasaje",
    tipo:"Interior"
  },
  
  //{
  //  nombre: "Wolverine",
  //  bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
  //  img: "assets/img/wolverine.png",
  // aparicion: "1974-11-01",
  //  casa: "Marvel"
  //}
];
getHeroes(){
  return this.heroes;
}

getHeroe(idx: number):Heroe{
  return this.heroes[idx];
}

agregarHeroe(heroe: any) {
  this.heroes.push(heroe);
  console.log('Heroe agregado:', heroe);
}
buscarHeroes(dato:string) : Heroe[] {
  let heroesArr:Heroe[] = [];
  dato = dato.toLocaleLowerCase();
  for(let i = 0; i < this.heroes.length; i++) {
    let heroe = this.heroes[i];
    let nombre = heroe.ciuO.toLocaleLowerCase();
    if(nombre.indexOf(dato) >= 0) {
      heroe.idx = i;
      heroesArr.push(heroe);
    }
  }
  return heroesArr;
}

  constructor() {
    console.log ("Servicio listo para usar...");
   }
}


export interface Heroe{
  ciuO: string,
  ciuD: string,
  precioR: string,
  desc: string,
  tipo: string,
  idx?: number;
}

