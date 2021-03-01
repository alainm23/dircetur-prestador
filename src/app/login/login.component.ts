import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  form_recuperar: FormGroup;
  mostrar_view: string = "login";
  constructor(public auth:AuthService,
              public db:DatabaseService,
              public router: Router,
              private toastrService: NbToastrService,
              private afAuth: AngularFireAuth) { }

  ngOnInit() {
    console.log('Formulario de Login');
    this.auth.menu_g=this.auth.menu_login;
    this.db.infoheader.nombre_comercial='NNC';
    this.form = new FormGroup ({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required])
    });
  }

  loginView () {
    this.mostrar_view="login";
  }

  recuperarPass () {
    this.form_recuperar = new FormGroup ({
      email: new FormControl (null, [Validators.required, Validators.email])
    });
    this.mostrar_view="recuperar";
  }

  recuperarPass2 () {
    let correo = this.form_recuperar.value.email;
    console.log('Este es el correo:', correo);
    this.afAuth.auth.sendPasswordResetEmail(correo).then(
      () => {
        // success, show some message
         // Mensaje Toastr
         this.toastrService.show(
          'Con información para recuperar su contraseña.',
          `Le enviamos un correo`, {limit: 3, status:"success" }
          );
      },
      err => {
        // handle errors
        let message: string;

        switch (err) {
          case 'auth/wrong-password':
            message = 'Invalid login credentials.';
            break;
          case 'auth/network-request-failed':
            message = 'Please check your internet connection';
            break;
          case 'auth/too-many-requests':
            message =
              'We have detected too many requests from your device. Take a break please!';
            break;
          case 'auth/user-disabled':
            message =
              'Your account has been disabled or deleted. Please contact the system administrator.';
            break;
          case 'auth/requires-recent-login':
            message = 'Please login again and try again!';
            break;
          case 'auth/email-already-exists':
            message = 'Email address is already in use by an existing user.';
            break;
          case 'auth/user-not-found':
            message =
              'We could not find user account associated with the email address or phone number.';
            break;
          case 'auth/phone-number-already-exists':
            message = 'The phone number is already in use by an existing user.';
            break;
          case 'auth/invalid-phone-number':
            message = 'The phone number is not a valid phone number!';
            break;
          case 'auth/invalid-email  ':
            message = 'The email address is not a valid email address!';
            break;
          case 'auth/cannot-delete-own-user-account':
            message = 'You cannot delete your own user account.';
            break;
           default:
            message = 'Oops! Something went wrong. Try again later.';
            break;
        }
        // Mensaje Toastr
        this.toastrService.show(
          message,
          `Error`, {limit: 3, status:"danger" }
          );
      }
    );
  }

  login () {

    this.auth.login(this.form.value.email,this.form.value.password)
    .then(r => {
      this.db.gettipouser(r.user.uid).subscribe((data:any) =>{
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
      })

      console.log(r);
    })
    .catch(error => {
      let m='';
      if (error.code=="auth/wrong-password" || error.code=="auth/user-not-found")
      {
        m=" Email o Contraseña Invalidos";
      }
      else if(error.code=="uth/too-many-requests")
      {
        m="Demasiados intentos fallidos. Por favor, inténtelo de nuevo más tarde";
      }
      // Mensaje Toastr
      this.toastrService.show(
        'Error.',
        `Error:`+m, {limit: 3, status:"danger" }
        );
      console.log(error);
    })

  }
}
