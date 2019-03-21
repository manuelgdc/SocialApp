import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  username: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register(){
    const { username, password, cpassword} = this;
      if(password !== cpassword) {
        return console.error("Contraseñas incorrectas");
      }

      try {
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password);
      } catch (error) {
          console.dir(error)
      }
      
  
  }

}
