import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, Observable } from 'rxjs';
import { Formation } from '../models/Formation';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  headerall=new HttpHeaders();
  params= new HttpParams();
  
  private url = "http://localhost:3000/formation";
  
  httpOptions: { headers: HttpHeaders } = {
     headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  fetchAllleadership(): Observable<Formation[]> {
    return this.http
      .get<Formation[]>(`${this.url}/leadership`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handlerError<Formation[]>("fetchAllleadership", []))
      );
  }

  fetchAllenvironnement(): Observable<Formation[]> {
    return this.http
      .get<Formation[]>(`${this.url}/Environnement`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handlerError<Formation[]>("fetchAllenvironnement", []))
      );
  }

  fetchAllmanufactoring(): Observable<Formation[]> {
    return this.http
      .get<Formation[]>(`${this.url}/manufactoring`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handlerError<Formation[]>("fetchAllmanufactoring", []))
      );
  }

  fetchAllqualite(): Observable<Formation[]> {
    return this.http
      .get<Formation[]>(`${this.url}/qualite`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handlerError<Formation[]>("fetchAllqualite", []))
      );
  }

  fetchAllsupplychain(): Observable<Formation[]> {
    return this.http
      .get<Formation[]>(`${this.url}/SupplyChain`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handlerError<Formation[]>("fetchAllsupplychain", []))
      );
  }

  fetchAllinnovation(): Observable<Formation[]> {
    return this.http
      .get<Formation[]>(`${this.url}/innovation`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handlerError<Formation[]>("fetchAllinnovation", []))
      );
  }

  //get formation with title
  getFormationDetails(title:any): Observable<Formation[]> {
    return this.http.get<Formation[]>(`http://localhost:3000/formation/filter/`+title, { responseType: "json", headers:this.headerall, params:this.params })
      .pipe(
        catchError(this.errorHandlerService.handlerError<Formation[]>("getFormationDetails", []))
      );
  }
  /////////////////////////

  createFormation(
    formData: Partial<Formation>
    ): Observable<Formation> {
    return this.http.post<Formation>(this.url,
    { title: formData.title,
      body: formData.body,
      img: formData.img,
      category: formData.category,
      user: formData.user,
      details: formData.details },
      this.httpOptions
    )
    .pipe(
      first(),
         catchError(this.errorHandlerService.handlerError<Formation>("createFormation"))
    );
    } 

/*
    deleteFormation(formationTitle: Pick<Formation, "title">) : Observable<{}> {
      return this.http
      .delete<Formation>(`${this.url}/${formationTitle}`, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handlerError<Formation>("deleteFormation"))
      );
      }*/
}
