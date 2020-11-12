import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {
  public proyectos: Array<Proyecto>;
  constructor() { 
    this.proyectos= [
      new Proyecto("Primer WebApp", "Angular", "url no disponible", 4, false),
      new Proyecto("Igna y Cata", "HTML5 y CSS3", "https://github.com/IgnaGarcia/IgnaYCata", 12, true),
      new Proyecto("Buscador de Contexto", "C++", "https://github.com/IgnaGarcia/Buscador-de-Contexto", 10, false)
    ]
  }

  ngOnInit(): void {
  }

}
