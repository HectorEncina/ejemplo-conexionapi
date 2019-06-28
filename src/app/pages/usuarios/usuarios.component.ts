import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  public usuarios: UsuarioDto [];

  public pagina = 1;

  constructor(
    public usuarioService: UsuarioService,
    private route: Router
  ) { }

  ngOnInit() {
    this.CargarUsuarios(this.pagina);
  }


  CargarUsuarios(pagina: number) {
    this.usuarioService.ObtenerUsuarios(pagina).subscribe( usuarios => {
      this.usuarios = usuarios.data;
    });
  }


  anteriorPagina() {
    if (this.pagina > 1) {
      this.pagina--;

      this.CargarUsuarios(this.pagina);
    }
  }

  siguientePagina() {
    this.pagina++;
    this.CargarUsuarios(this.pagina);
  }

  navegarPerfilUsuario(usuarioId: number) {
    this.route.navigate(['/usuario/' + usuarioId]);
  }

}
