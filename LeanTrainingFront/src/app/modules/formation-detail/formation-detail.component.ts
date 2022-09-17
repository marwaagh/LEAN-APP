import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Devis } from 'src/app/models/Devis';
import { Formation } from 'src/app/models/Formation';
import { DevisService } from 'src/app/services/devis.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.scss']
})
export class FormationDetailComponent implements OnInit {
@ViewChild("formDirective") formDevisDirective!: NgForm ;
@Output() create: EventEmitter<any> = new EventEmitter();
formDevis!: FormGroup;
  title: any ;
  dataFormation : any;

  constructor(private route: ActivatedRoute, private formationService: FormationService, private devisService: DevisService) { 
    this.route.params.subscribe(data=>this.title=data['title']) ;
    console.log(this.title) ;
  }

  ngOnInit(): void {
    this.formationService.getFormationDetails(this.title).subscribe(data=>{
      this.dataFormation =data ;
      console.log(this.dataFormation) ;
  }) ;


  this.formDevis = this.createFormGroup();
  }

createFormGroup(): FormGroup{
  return new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(2) ]),
    email: new FormControl("", [Validators.required, Validators.minLength(7),]),
    phone: new FormControl("", [Validators.required, Validators.minLength(7),]),
    ste: new FormControl("", [Validators.required, Validators.minLength(7),]),
    fct: new FormControl("", [Validators.required, Validators.minLength(7),]),
    nb_part: new FormControl("", [Validators.required, Validators.minLength(7),]),
    sujet: new FormControl("", [Validators.required, Validators.minLength(7),]),
    msg: new FormControl("", [Validators.required, Validators.minLength(7),]),
  });
}
  onSubmit(formData: Pick<Devis, "name" | "email" | "phone" | "ste" | "fct" | "nb_part" | "sujet" | "msg">): void {
    this.devisService.createDevis(formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.formDevis.reset();
    //this.formContactDirective.resetForm();
    console.log(formData);
  }
}
