import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

  formations$!: Observable<Formation[]>;


  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.formations$ = this.fetchAll();
  }

  fetchAll(): Observable<Formation[]>{
    return this.formationService.fetchAllenvironnement();

  }
  createFormation(){
    console.log("done");
    this.formations$ = this.fetchAll();
  }
  Godetails(title: any){
    this.router.navigate(['detail/'+title]) ;
      }
/*
  delete(formationTitle: Pick<Formation, "title">): void{
    this.formationService
    .deleteFormation(formationTitle)
    .subscribe(() => (this.formations$ = this.fetchAll()));
  }*/

}
