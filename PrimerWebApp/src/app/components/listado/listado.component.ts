import { Component, OnInit } from '@angular/core';
import { Elemento } from '../../models/elemento';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public nombreAux: string;
  public listado: Array<Elemento>;

  constructor() {
    this.listado= [
      new Elemento(0, "Nacho"),
      new Elemento(1, "Mati"),
      new Elemento(2, "Alex"),
      new Elemento(3, "Brian"),
    ]
   }

  ngOnInit(): void {
  }

  add(){
    this.listado.push(
      new Elemento(this.listado.length, this.nombreAux)
    );
  }
}
