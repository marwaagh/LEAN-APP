import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title: any;
  fform!: FormGroup;
  
  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.fform = this.createFormGroup();
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      title: new FormControl("",[Validators.required, Validators.minLength(2) ])
    });
  }

  search(): void{
    this.formationService.getFormationDetails(this.fform.value.title).subscribe((msg)=>{
      console.log(msg.length);
      if(msg.length == 0 ) {
        Swal.fire( 'Formation non trouvée', 'Veuillez réessayez de nouveau ', 'error');     
      } else {
      this.router.navigate(['detail/'+this.fform.value.title]) ;}
    });
  }
}
      //
    //this.router.navigate(["details"], {queryParams: {data:this.title}});
      /*  if(msg == undefined){
          Swal.fire( 'Connexion à échouée', 'Veuillez vérifier votre email et/ou votre mot de passe ', 'error');     
        } else {
          if(this.signinForm.value.email == "admin@gmail.com" ){
            this.router.navigate(["account-admin"]);
          } else {
            this.router.navigate(["account"], {queryParams: {data:this.email}});
          }
        }});
    
  }
  }*/
