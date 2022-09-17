import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  formations$!: Observable<Formation[]>;


  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.formations$ = this.fetchAll();
  }

  fetchAll(): Observable<Formation[]>{
    return this.formationService.fetchAllleadership();

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
