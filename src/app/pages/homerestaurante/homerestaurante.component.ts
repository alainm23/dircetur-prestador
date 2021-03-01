import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// servicios
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-homerestaurante',
  templateUrl: './homerestaurante.component.html',
  styleUrls: ['./homerestaurante.component.scss']
})
export class HomerestauranteComponent implements OnInit {
  form: FormGroup;
  restaurante:any;
  representantes:any [];

  constructor(public auth : AuthService, public db:DatabaseService, private toastrService: NbToastrService,
              public router: Router) { }

  ngOnInit() {
    this.form = new FormGroup ({
      id: new FormControl(''),
      nombre_comercial: new FormControl ('', [Validators.required]),
      razon_social: new FormControl ('', Validators.required),
      ruc: new FormControl ('', Validators.required),
      direccion: new FormControl ('', Validators.required),
      telefono: new FormControl ('', Validators.required),
      pagina_web: new FormControl (''),
      numero_certificado: new FormControl ('', Validators.required),
      fecha_ins: new FormControl ('', Validators.required),
      fecha_exp: new FormControl ('', Validators.required),
      calificacion_nombre: new FormControl ('', Validators.required),
      categoria_nombre: new FormControl ('', Validators.required),
      cantidad_mesas: new FormControl ('', Validators.required),
      cantidad_sillas: new FormControl ('', Validators.required),
      provincia_nombre: new FormControl ('', Validators.required),
      distrito_nombre: new FormControl ('', Validators.required),
      servicios_complementarios: new FormControl (''),
      observaciones: new FormControl (''),
      correo: new FormControl ('', Validators.required),
      contraseña: new FormControl ('', Validators.required),
    });

    let u=this.auth.authState ().subscribe((auth: any) => {
      if(auth)
      {
        console.log('logeado');
        this.traerRestaurante(auth.uid);

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

  traerRestaurante(id){
      this.db.traerRestaurante(id).subscribe((data:any) => {
        console.log('Informacion del Restaurante:', data);
        this.restaurante = data;
        this.form.controls['provincia_nombre'].setValue(data.provincia.nombre);
        this.form.controls['distrito_nombre'].setValue(data.distrito.nombre);
        this.form.controls['calificacion_nombre'].setValue(data.calificacion.nombre);
        this.form.controls['categoria_nombre'].setValue(data.categoria.nombre);
             
        this.form.patchValue(data);
        this.db.infoheader.nombre_comercial=data.nombre_comercial;
        // cuando ya este el logotipo en la bd
        //this.db.infoheader.logotipo=data.logotipo;
        this.db.infoheader.logotipo='https://es.freelogodesign.org/Content/img/logo-ex-7.png';
      });

      this.db.traerRestauranteRepresentantes(id).subscribe(data =>
        {
          console.log(data);
          this.representantes=data;
        });
      
      
  }
  actualizarInfo(status)
  {
    let obj: any = {
      id:this.form.value.id,
      direccion:this.form.value.direccion,
      telefono:this.form.value.telefono,
      correo:this.form.value.correo,
      pagina_web:this.form.value.pagina_web,
      cantidad_mesas:this.form.value.cantidad_mesas,
      cantidad_sillas:this.form.value.cantidad_sillas
    };

    this.db.actualizarRestaurante(obj).then (() => {
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
