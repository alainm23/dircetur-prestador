import { Component, OnInit } from '@angular/core';
// servicios
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-reconocimientoagencia',
  templateUrl: './reconocimientoagencia.component.html',
  styleUrls: ['./reconocimientoagencia.component.scss']
})
export class ReconocimientoagenciaComponent implements OnInit {
  validartipo:string;
  constructor(public auth : AuthService, 
              public db:DatabaseService, 
              private toastrService: NbToastrService,
              public router: Router) { }

  ngOnInit() {
    this.validartipo=this.auth.tipo_user;

    if (this.validartipo == 'agencia') 
    {

    }
    else if (this.validartipo == 'alojamiento')
    {

    }
    else if (this.validartipo == 'restaurante')
    {

    }
    else if (this.validartipo == 'guia')
    {

    }
    else
    {
      this.auth.menu_g=this.auth.menu_login;
      console.log('no logeado');
      this.router.navigate(['pages/login']); 
    }
  }
  traerFecha (tiempo)
    {
      return moment(tiempo).format("DD/MM/YYYY");
    }
  traerData (id){
    if (this.validartipo == 'agencia') 
    {
      
    }
    else if (this.validartipo == 'alojamiento')
    {
     
    }
    else if (this.validartipo == 'restaurante')
    {
    
    }
    else if (this.validartipo == 'guia')
    {
    
    }
  }
}
