import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado: string='';

  borrarHeroe() {
    // this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
    // console.log(heroeBorrado);
    // this.heroes= [];
  }

}


