import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseService } from './database.service';
import { first } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tipo_user:string='';
  estaLogeado:boolean=false;
  Uid:string='';
  email_user_logeado:string='';
  // Menu
  menu_g:any [] = [];
  menu_login=[
  // Menu Login
    {
    title: 'Login',
    icon: 'home-outline',
    link: '/pages/login',
    home: true,
  }
  ];
  menu_global = [
    {
      title: 'Información',
      icon: 'home-outline',
      link: '/pages/home',
      home: true,
    },
    // {
    //   title: 'Opciones',
    //   group: true,
    // },
    // {
    //   title: 'Reconocimientos',
    //   icon: 'award-outline',
    //   link: '/pages/reconocimiento',
    //   home: true,
    // },
    // {
    //   title: 'Sanciones',
    //   icon: 'question-mark-outline',
    //   link: '/pages/reclamo',
    //   home: true,
    // },
    // {
    //   title: 'Notificaciones',
    //   icon: 'bell-outline',
    //   link: '/pages/notificacion',
    //   home: true,
    // }
  ];

  constructor(public afAuth: AngularFireAuth,
              public db:DatabaseService) {
      this.authState().subscribe(user=>{

      if(user)
      {
        this.estaLogeado=true;
        this.Uid=user.uid;
        this.email_user_logeado=user.email;

      }
      else
      {
        this.menu_g=this.menu_g;
        this.estaLogeado=false;
        this.Uid='';
      }
    });
  }

  async isLogin (){
    return await this.afAuth.authState.pipe(first()).toPromise();
  }

  public authState () {
    return this.afAuth.authState;
  }
  public login (email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword (email, password);
  }
  public signOut () {
    this.db.infoheader.nombre_comercial='NNC';
    this.db.infoheader.logotipo='Nimg';
    this.menu_g=this.menu_login;
    return this.afAuth.auth.signOut ();
  }
}


