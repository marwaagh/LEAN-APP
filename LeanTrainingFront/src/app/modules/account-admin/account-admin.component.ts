import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';
import { first, Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { DevisService } from 'src/app/services/devis.service';
import { Devis } from 'src/app/models/Devis';

@Component({
  selector: 'app-account-admin',
  templateUrl: './account-admin.component.html',
  styleUrls: ['./account-admin.component.scss']
})
export class AccountAdminComponent implements OnInit {
@ViewChild("formDirective") formDirective!: NgForm ;
@ViewChild("formDirective") formContactDirective!: NgForm ;
@ViewChild("formDirective") formDevisDirective!: NgForm ;
@Output() create: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;
  users$!: Observable<User[]>;
  contact$!: Observable<Contact[]>
  formContact!: FormGroup;
  devis$!: Observable<Devis[]>
  formDevis!: FormGroup;

  constructor(private formationService: FormationService, private authService: AuthService, private contactService: ContactService, private devisService: DevisService) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
    this.formContact = this.createFormGroup();
    this.formDevis = this.createFormGroup();
    this.users$ = this.fetchAll();
    this.contact$ = this.fetchAllContact();
    this.devis$ = this.fetchAllDevis();
  }

  /////////////////Form Ajout Formation///////////////////
  createFormGroup(): FormGroup{
    return new FormGroup({
      title: new FormControl("",[Validators.required, Validators.minLength(7) ]),
      body: new FormControl("", [Validators.required, Validators.minLength(7),]),
      img: new FormControl("", [Validators.required, Validators.minLength(7),]),
      category: new FormControl("", [Validators.required, Validators.minLength(7),]),
      user: new FormControl("", [Validators.required, Validators.minLength(2),]),
      details: new FormControl("", [Validators.required, Validators.minLength(2),]),
    });
  }
 

  onSubmit(formData: Pick<Formation, "title" | "body" | "img" | "category" | "user" | "details">): void {

    this.formationService
      .createFormation(formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form.reset();
    this.formDirective.resetForm();
    console.log(formData);
  }

/////////////Directives User///////////////////////////
  fetchAll(): Observable<User[]>{
    return this.authService.fetchAll();

  }

  createFormation(){
    console.log("done");
    this.users$ = this.fetchAll();
  }

///////////////////Directives Contact/////////////////////////////////////
  fetchAllContact(): Observable<Contact[]>{
    return this.contactService.fetchAllContact();

  }
  createContact(){
    console.log("done");
    this.contact$ = this.fetchAllContact();
  }

///////////////////Directives Contact/////////////////////////////////////
fetchAllDevis(): Observable<Devis[]>{
  return this.devisService.fetchAllDevis();

}
createDevis(){
  console.log("done");
  this.devis$ = this.fetchAllDevis();
}
}
