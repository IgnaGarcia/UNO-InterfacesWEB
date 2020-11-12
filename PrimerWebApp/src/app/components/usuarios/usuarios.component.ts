import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuarios: Array<Usuario>;
  
  constructor( private _usuarioService: UsuarioService) {
    this.usuarios= [];
  }

  ngOnInit(): void {
    this.cargaUsuarios();
  }

  cargaUsuarios(){
    this._usuarioService.getUsuarios().subscribe(
      result =>{
        result.data.forEach(user =>
          this.usuarios.push(new Usuario(user.id, user.first_name, user.last_name, user.email, user.avatar))
          )
        console.log(this.usuarios);
      },
      error => {console.log(error)}
    ); 
  }
}
