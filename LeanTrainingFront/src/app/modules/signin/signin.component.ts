import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  email: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      email: new FormControl("",[Validators.required, Validators.email ]),
      password: new FormControl("", [Validators.required, Validators.minLength(7),
      ]),
    });
  }

  signin(): void{
    this.authService.signin(this.signinForm.value.email, this.signinForm.value.password)
    .subscribe( (msg) => {
      console.log(msg);
      if(msg == undefined){
        Swal.fire( 'Connexion à échouée', 'Veuillez vérifier votre email et/ou votre mot de passe ', 'error');     
      } else {
        if(this.signinForm.value.email == "admin@gmail.com" ){
          this.router.navigate(["account-admin"]);
        } else {
          this.router.navigate(["account"], {queryParams: {data:this.email}});
        }
      }});
  }
}
