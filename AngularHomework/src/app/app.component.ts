import { Component } from '@angular/core';

type Producto = {
  ID: string;
  nombres: string;
  costos: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = true;

  toggle() {
    this.show = !this.show;
  }

  headers: string[] = ['ID', 'Nombre', 'Costo'];

  productos: Producto[] = [
    {
      ID: '1',
      nombres: 'Coca Cola',
      costos: '300',
    },
    {
      ID: '2',
      nombres: 'Oreos',
      costos: '120',
    },
    {
      ID: '3',
      nombres: 'Pan',
      costos: '90',
    },
  ];
}
