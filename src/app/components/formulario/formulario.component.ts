import { Component} from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    constructor(private heroesService: HeroesService){}  

   guardar() {
    var nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    var anio = (document.getElementById('anio') as HTMLInputElement).value;
    var bio = (document.getElementById('bio') as HTMLInputElement).value;
    var casa = (document.getElementById('casa') as HTMLInputElement).value;
    var imagen = (document.getElementById('imagen') as HTMLInputElement).value;

    // Crear objeto con la información ingresada
    var nuevoHeroe = {
      nombre: nombre,
      bio: bio,
      img: imagen,
      aparicion: anio,
      casa: casa
    };
    // Agregar el nuevo héroe al array existente en el servicio
    this.heroesService.agregarHeroe(nuevoHeroe);
  }
}
