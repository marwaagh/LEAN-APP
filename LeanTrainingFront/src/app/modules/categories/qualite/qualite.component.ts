import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-qualite',
  templateUrl: './qualite.component.html',
  styleUrls: ['./qualite.component.scss']
})
export class QualiteComponent implements OnInit {

  formations$!: Observable<Formation[]>;


  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.formations$ = this.fetchAll();
  }

  fetchAll(): Observable<Formation[]>{
    return this.formationService.fetchAllqualite();

  }
  createFormation(){
    console.log("done");
    this.formations$ = this.fetchAll();
  }
  Godetails(title: any){
    this.router.navigate(['detail/'+title]) ;
      }

}
