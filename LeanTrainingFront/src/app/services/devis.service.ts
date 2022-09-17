import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Devis } from '../models/Devis';
import { ErrorHandlerService } from './error-handler.service';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  private url = "http://localhost:3000/devis";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
 };

 constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

 fetchAllDevis(): Observable<Devis[]> {
  return this.http
    .get<Devis[]>(this.url, { responseType: "json" })
    .pipe(
      catchError(this.errorHandlerService.handlerError<Devis[]>("fetchAllDevis", []))
    );
}

  createDevis(
    formData: Partial<Devis>
    ): Observable<Devis> {
    return this.http.post<Devis>(this.url,
    { name: formData.name,
      email: formData.email,
      phone: formData.phone,
      ste: formData.ste,
      fct: formData.fct,
      nb_part: formData.nb_part,
      sujet: formData.sujet,
      msg: formData.msg },
      this.httpOptions
    )
    .pipe(
      first(),
         catchError(this.errorHandlerService.handlerError<Devis>("createDevis"))
    );
    } 
}
