import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ErrorHandlerService } from './error-handler.service';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = "http://localhost:3000/contact";
  
  httpOptions: { headers: HttpHeaders } = {
     headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  fetchAllContact(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(this.url, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handlerError<Contact[]>("fetchAllContact", []))
      );
  }

  createContact(
    formData: Partial<Contact>
    ): Observable<Contact> {
    return this.http.post<Contact>(this.url,
    { name: formData.name,
      email: formData.email,
      msg: formData.msg },
      this.httpOptions
    )
    .pipe(
      first(),
         catchError(this.errorHandlerService.handlerError<Contact>("createContact"))
    );
    } 
}
