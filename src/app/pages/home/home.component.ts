import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// servicios
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  agencia:any;
  alojamiento:any;
  restaurante:any;
  guia:any;
  idiomas:any [];
  tipos_guiado:any [];
  representantes:any [];
  tipos_turismos:any [];
  validartipo:string;
  constructor(public auth : AuthService,
              public db:DatabaseService,
              private toastrService: NbToastrService,
              public router: Router)
              {

              }

  ngOnInit() {

    this.auth.isLogin ()
      .then (async (user: any) => {
        this.db.gettipouser(user.uid).subscribe((data:any) =>{
          console.log(data);
          if(data.tipo_usuario=='proveedor')
          {
            if(data.producto_tipo=='agencia')
            {
              this.auth.tipo_user='agencia';
              this.auth.menu_g=this.auth.menu_global;
              this.router.navigate(['pages/home']);
            }
            else if(data.producto_tipo=='alojamiento')
            {
              this.auth.tipo_user='alojamiento';
              this.auth.menu_g=this.auth.menu_global;
              this.router.navigate(['pages/home']);
            }
            else if(data.producto_tipo=='restaurante')
            {
              this.auth.tipo_user='restaurante';
              this.auth.menu_g=this.auth.menu_global;
              this.router.navigate(['pages/home']);
            }
            else if(data.producto_tipo=='guia')
            {
              this.auth.tipo_user='guia';
              this.auth.menu_g=this.auth.menu_global;
              this.router.navigate(['pages/home']);
            }
            else
            {

              // Mensaje Toastr
              this.toastrService.show(
                'Error.',
                `Usuario sin Ningun Rol`, {limit: 3, status:"danger" }
                );
              console.log('Usuario sin Ningun Rol');
              this.auth.signOut();
              this.router.navigate(['pages/login']);
            }

            this.init (user.uid);
          }
          else{
            // Mensaje Toastr
            this.toastrService.show(
              'Error.',
              `Usuario sin Privilegio`, {limit: 3, status:"danger" }
              );
            console.log('error en el login user sin privilegios');
            this.auth.signOut();
            this.router.navigate(['pages/login']);
          }
        });
      });
  }

  init (uid: string) {
    this.validartipo=this.auth.tipo_user;
    if (this.validartipo == 'agencia')
    {
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
        clasificacion_nombre: new FormControl ('', Validators.required),
        provincia_nombre: new FormControl ('', Validators.required),
        distrito_nombre: new FormControl ('', Validators.required),
        servicios_complementarios: new FormControl (''),
        observaciones: new FormControl (''),
        correo: new FormControl ('', Validators.required),
        contraseña: new FormControl ('', Validators.required),
      });
    }
    else if (this.validartipo == 'alojamiento')
    {
      this.form = new FormGroup ({
        id: new FormControl(''),
        nombre_comercial: new FormControl ('', [Validators.required]),
        numero_habitaciones: new FormControl ('', [Validators.required]),
        numero_camas: new FormControl ('', [Validators.required]),
        razon_social: new FormControl ('', Validators.required),
        ruc: new FormControl ('', Validators.required),
        direccion: new FormControl ('', Validators.required),
        telefono: new FormControl ('', Validators.required),
        pagina_web: new FormControl (''),
        numero_certificado: new FormControl ('', Validators.required),
        fecha_ins: new FormControl ('', Validators.required),
        fecha_exp: new FormControl ('', Validators.required),
        clase_nombre: new FormControl ('', Validators.required),
        categoria: new FormControl ('', Validators.required),
        provincia_nombre: new FormControl ('', Validators.required),
        distrito_nombre: new FormControl ('', Validators.required),
        servicios_complementarios: new FormControl (''),
        observaciones: new FormControl (''),
        correo: new FormControl ('', Validators.required),
        contraseña: new FormControl ('', Validators.required),
      });
    }
    else if (this.validartipo == 'restaurante')
    {
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
    }
    else if (this.validartipo == 'guia')
    {
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
    }
    else
    {
      this.auth.menu_g=this.auth.menu_login;
    }

    this.traerData (uid);
  }

  traerFecha (tiempo)
  {
    return moment (tiempo).format("DD/MM/YYYY");
  }

  traerData (id){
    if (this.validartipo == 'agencia')
    {
      this.db.traerAgencia(id).subscribe((data:any) => {
        console.log('Informacion de la agencia:', data);
        this.agencia = data;
        this.form.controls['provincia_nombre'].setValue(data.provincia.nombre);
        this.form.controls['distrito_nombre'].setValue(data.distrito.nombre);
        this.form.controls['clasificacion_nombre'].setValue(data.clasificacion.nombre);
        this.tipos_turismos = data.tipos_turismo;

        this.form.patchValue (data);

        // this.db.infoheader.nombre_comercial=data.nombre_comercial;
        // cuando ya este el logotipo en la bd
        //this.db.infoheader.logotipo=data.logotipo;
        // this.db.infoheader.logotipo='https://es.freelogodesign.org/Content/img/logo-ex-7.png';
      });

      this.db.traerAgenciaRepresentantes(id).subscribe(data => {
        console.log(data);
        this.representantes=data;
      });
    }
    else if (this.validartipo == 'alojamiento')
    {
      this.db.traerAlojamiento(id).subscribe((data:any) => {
        console.log('Informacion del Alojamiento:', data);
        this.alojamiento = data;
        this.form.controls['provincia_nombre'].setValue(data.provincia.nombre);
        this.form.controls['distrito_nombre'].setValue(data.distrito.nombre);
        // this.form.controls['clase_nombre'].setValue(data.clase.nombre);
        this.form.patchValue(data);
        this.db.infoheader.nombre_comercial = data.nombre_comercial;
        // cuando ya este el logotipo en la bd
        //this.db.infoheader.logotipo=data.logotipo;
        // this.db.infoheader.logotipo='https://es.freelogodesign.org/Content/img/logo-ex-7.png';
      });
      this.db.traerAlojamientoRepresentantes(id).subscribe(data => {
        console.log(data);
        this.representantes=data;
      });
    }
    else if (this.validartipo == 'restaurante')
    {
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

      this.db.traerRestauranteRepresentantes(id).subscribe(data => {
        console.log(data);
        this.representantes=data;
      });
    }
    else if (this.validartipo == 'guia')
    {
      this.db.traerGuia(id).subscribe((data:any) => {
        console.log('Informacion del Guia:', data);
        this.guia = data;
        /*this.form.controls['provincia_nombre'].setValue(data.provincia.nombre);
        this.form.controls['distrito_nombre'].setValue(data.distrito.nombre);*/
        this.idiomas=data.idiomas;
        this.tipos_guiado=data.tipos;

        this.form.patchValue(data);

        this.db.infoheader.nombre_comercial = data.nombre_completo;
        // cuando ya este el logotipo en la bd
        //this.db.infoheader.logotipo=data.logotipo;
        this.db.infoheader.logotipo='https://es.freelogodesign.org/Content/img/logo-ex-7.png';
      });
    }
  }
  actualizarInfo (status)
  {
    if (this.validartipo == 'agencia')
    {
      let obj: any = {
        id:this.form.value.id,
        direccion:this.form.value.direccion,
        telefono:this.form.value.telefono,
        correo:this.form.value.correo,
        pagina_web:this.form.value.pagina_web
      };
      this.db.actualizarAlojamiento(obj).then (() => {
        // Mensaje Toastr
        this.toastrService.show(
        'Correctamente.',
        `Información Actualizada`, {limit: 3, status }
        );
      }).catch (e => {
        console.log(e);
      })
    }
    else if (this.validartipo == 'alojamiento')
    {
      let obj: any = {
        id:this.form.value.id,
        direccion:this.form.value.direccion,
        telefono:this.form.value.telefono,
        correo:this.form.value.correo,
        pagina_web:this.form.value.pagina_web
      };

      this.db.actualizarAlojamiento(obj).then (() => {
        // Mensaje Toastr
        this.toastrService.show(
        'Correctamente.',
        `Información Actualizada`, {limit: 3, status }
        );
      }).catch (e => {
        console.log('error:'+e);
      })
    }
    else if (this.validartipo == 'restaurante')
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
    else if (this.validartipo == 'guia')
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
}
