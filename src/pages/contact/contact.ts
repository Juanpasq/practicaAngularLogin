import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConectorDbProvider } from '../../providers/conector-db/conector-db';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
    
    usuarios;

  constructor(public navCtrl: NavController, public conector: ConectorDbProvider ) {

  }
    
    ionViewDidLoad(){
        
        this.conector.obtenerConexion()
        
        .subscribe(
            
        (data)=>{this.usuarios = data;},
            
        (error)=> {console.log(error);}
            
        )
    };

}
