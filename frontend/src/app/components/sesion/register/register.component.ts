import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mimodelo } from 'src/app/modelos/mimodelo';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formuser: FormGroup;
  public misusuarios: Mimodelo;

  constructor(private formBuilder: FormBuilder, private mimodelo: UsuariosService) {
    this.formuser = formBuilder.group({
      nombre: [''],
      apellidos: [''],
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  submit() {
    this.mimodelo.crearUsuario(this.formuser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  get nombre() {
    return this.formuser.get('nombre');
  }

  get apellidos() {
    return this.formuser.get('apellidos');
  }


}
