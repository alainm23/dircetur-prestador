import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  infoheader:any= {
    nombre_comercial: '',
    logotipo: 'https://es.freelogodesign.org/Content/img/logo-ex-7.png'
  };
  constructor(private afs: AngularFirestore) { }

  agregarPersona(data:any)
  { 
    data.id = this.afs.createId();
    return this.afs.collection('personas').doc (data.id).set (data);
    ///return this.afs.collection('personas').add (data);
    //return this.afs.collection('personas').doc (data.id).update (data);
    //return this.afs.collection('personas').doc (data.id).delete ();
    //return this.afs.collection('personas').doc (data.id).valueChanges ();
  }

  getall () {
    return this.afs.collection('personas').valueChanges ();
  }

  eliminar (id){
    return this.afs.collection('personas').doc (id).delete ();
  }

  traerdata (id){
    return this.afs.collection('personas').doc (id).valueChanges ();
  }

  actualizar(data)
  {
    return this.afs.collection('personas').doc (data.id).update (data);
  }
  actualizarAgencia(data)
  {
    return this.afs.collection('Agencias').doc (data.id).update (data);
  }
  actualizarAlojamiento(data)
  {
    return this.afs.collection('Alojamientos').doc (data.id).update (data);
  }
  actualizarRestaurante(data)
  {
    return this.afs.collection('Restaurantes').doc (data.id).update (data);
  }
  actualizarGuia(data)
  {
    return this.afs.collection('Guias').doc (data.id).update (data);
  }
  gettipouser(uid)
  {
    return this.afs.collection('Users').doc (uid).valueChanges();
  }
  traerAgencia(uid)
  {
    return this.afs.collection('Agencias').doc (uid).valueChanges();
  }
  traerAlojamiento(uid)
  {
    return this.afs.collection('Alojamientos').doc (uid).valueChanges();
  }
  traerRestaurante(uid)
  {
    return this.afs.collection('Restaurantes').doc (uid).valueChanges();
  }
  traerGuia(uid)
  {
    return this.afs.collection('Guias').doc (uid).valueChanges();
  }
  traerAgenciaRepresentantes(uid)
  {
    return this.afs.collection('Agencias').doc (uid).collection('Representantes').valueChanges();
  }
  traerAlojamientoRepresentantes(uid)
  {
    return this.afs.collection('Alojamientos').doc (uid).collection('Representantes').valueChanges();
  }
  traerRestauranteRepresentantes(uid)
  {
    return this.afs.collection('Restaurantes').doc (uid).collection('Representantes').valueChanges();
  }
  
}
