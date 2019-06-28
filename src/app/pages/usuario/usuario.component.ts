import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {


  usuario: UsuarioDto;
  usuarioId: number;

  constructor(
    public usuarioService: UsuarioService,
    private routeActivated: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuarioId = +this.routeActivated.snapshot.paramMap.get('id');
    this.loadUsuario();
  }

  loadUsuario() {
    this.usuarioService.ObtenerUsuario(this.usuarioId).subscribe( result => {
      this.usuario = result.data;
      // console.log(this.usuario);
    });
  }

}
