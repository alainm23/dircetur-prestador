import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// servicios
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-homeguia',
  templateUrl: './homeguia.component.html',
  styleUrls: ['./homeguia.component.scss']
})
export class HomeguiaComponent implements OnInit {
  form: FormGroup;
  guia:any;
  idiomas:any [];
  tipos_guiado:any [];

  constructor(public auth : AuthService, public db:DatabaseService, private toastrService: NbToastrService,
    public router: Router) { }

  ngOnInit() {
    this.form = new FormGroup ({
      id: new FormControl(''),
      nombre_completo: new FormControl ('', [Validators.required]),
      asociacion_colegio: new FormControl ('', Validators.required),
      centro_formacion: new FormControl ('', Validators.required),
      nro_carne: new FormControl ('', Validators.required),
      nro_documento: new FormControl ('', Validators.required),
      ruc: new FormControl ('', Validators.required),
      direccion: new FormControl ('', Validators.required),
      telefono: new FormControl ('', Validators.required),
      fecha_ins: new FormControl ('', Validators.required),
      fecha_exp: new FormControl ('', Validators.required),
      correo: new FormControl ('', Validators.required),
      provincia_nombre: new FormControl ('', Validators.required),
      distrito_nombre: new FormControl ('', Validators.required),
      correo_personal: new FormControl ('', Validators.required),
      contraseña: new FormControl ('', Validators.required),
    });

    let u=this.auth.authState ().subscribe((auth: any) => {
      if(auth)
      {
        // Verificar porque entra aqui cuando uno apaga el servidor con un user logeado y luego lo prende pero no llegan todos los datos del user logeado 
        console.log('logeado');
        this.traerGuia(auth.uid);

      }
      else
      {
        this.auth.menu_g=this.auth.menu_login;
        console.log('no logeado');
        this.router.navigate(['pages/login']); 
      }

      u.unsubscribe();
  });
  }
  traerFecha(tiempo)
  {
    return moment(tiempo).format("DD/MM/YYYY");
  }
  traerGuia(id){
    this.db.traerGuia(id).subscribe((data:any) => {
      console.log('Informacion del Guia:', data);
      this.guia = data;
      /*this.form.controls['provincia_nombre'].setValue(data.provincia.nombre);
      this.form.controls['distrito_nombre'].setValue(data.distrito.nombre);*/
      this.idiomas=data.idiomas;
      this.tipos_guiado=data.tipos;
      
      this.form.patchValue(data);

      this.db.infoheader.nombre_comercial=data.nombre_completo;
      // cuando ya este el logotipo en la bd
      //this.db.infoheader.logotipo=data.logotipo;
      this.db.infoheader.logotipo='https://es.freelogodesign.org/Content/img/logo-ex-7.png';
      
      
    }); 
}
actualizarInfo(status)
  {
    let obj: any = {
      id:this.form.value.id,
      direccion:this.form.value.direccion,
      telefono:this.form.value.telefono,
      correo:this.form.value.correo,
      correo_personal:this.form.value.correo_personal
    };

    this.db.actualizarGuia(obj).then (() => {
      // Mensaje Toastr
      this.toastrService.show(
      'Correctamente.',
      `Información Actualizada`, {limit: 3, status }
      );
    }).catch (e => {
      console.log(e);
    })
  }
}
