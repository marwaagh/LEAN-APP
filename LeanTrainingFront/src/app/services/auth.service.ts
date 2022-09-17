import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { SignupComponent } from '../modules/signup/signup.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/auth" ;
  headerall=new HttpHeaders();
  params= new HttpParams();

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);

  userId!: Pick<User, "id">;

  httpOptions: { headers: HttpHeaders } = {
   headers: new HttpHeaders({ "Content-type": "application/json"}), 
  };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router ) {}


///////////////////////////

  Signup(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handlerError<User>("signup")) 
    );
  }

  ///////////all users in admin dashboard////////////

  fetchAll(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.url}/signup`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handlerError<User[]>("fetchAll", []))
      );
  }

    ///////////////////////

    find(email: any): Observable<User[]> {
      return this.http
        .get<User[]>(`${this.url}/`+email, { responseType: "json",headers:this.headerall,params:this.params})
        .pipe(
          catchError(this.errorHandlerService.handlerError<User[]>("find", []))
        );
    }

  /////////////////////////
  
  signin(email: Pick<User, "email">, password: Pick<User, "password">): Observable<{
    token: string;
    userId: Pick<User, "id">;
  }> {
      return this.http
      .post<{ token: string;
      userId: Pick<User, "id">;
      }>(`${this.url}/signin`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, "id"> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          //this.router.navigate(["account"]);
        }),
        catchError(
          this.errorHandlerService.handlerError<{
          token: string;
          userId: Pick<User, "id">;
        }>("signin")) 
    );

    }
   
  }
