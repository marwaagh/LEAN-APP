import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signupForm!: FormGroup;

  constructor(private authService: AuthService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  this.signupForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("",[Validators.required, Validators.email ]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
      password1: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  signup() : void{
    if (this.signupForm.value.name == ''|| this.signupForm.value.name == null) {

      this.snack.open("Nom et Prénom de l'utilisateur est nécessaire !!",'',{ duration: 3000,});
       return;
       }
       if (this.signupForm.value.email == ''|| this.signupForm.value.email == null) {
        this.snack.open("Email est nécessaire !!",'',{ duration: 3000,});
         return;
       } 
       if (this.signupForm.value.password == '' || this.signupForm.value.password == null) {
        this.snack.open("Mot de Passe est nécessaire !!",'',{ duration: 3000,});
         return;
       }
       if (this.signupForm.value.password1 !== this.signupForm.value.password ) {
        this.snack.open("Mot de Passe non vérifié !!",'',{ duration: 3000,});
         return;
       }

    this.authService
      .Signup(this.signupForm.value)
      .subscribe((msg) =>console.log(msg));
      Swal.fire( 'Inscription avec Succée !!', `Bienvenue ${this.signupForm.value.name} dans notre plateforme `, 'success');
    }
}

