import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild("formDirective") formContactDirective!: NgForm ;
  @Output() create: EventEmitter<any> = new EventEmitter();
  formContact!: FormGroup;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.formContact = this.createFormGroup();
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(2) ]),
      email: new FormControl("", [Validators.required, Validators.minLength(7),]),
      msg: new FormControl("", [Validators.required, Validators.minLength(7),]),
    });
  }
 

  onSubmit(formData: Pick<Contact, "name" | "email" | "msg">): void {
    this.contactService.createContact(formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.formContact.reset();
    //this.formContactDirective.resetForm();
    console.log(formData);
  }

}
