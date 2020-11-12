import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  Params } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre: string;
  public apellido: string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

   ngOnInit(): void{
    this._route.params.subscribe((params : Params) =>{
      this.nombre= params.nombre;
      this.apellido= params.apellido;
    })
  }

  cambiarNombre(value){
    this.nombre= value;
  }
}
