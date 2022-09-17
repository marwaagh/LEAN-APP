import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-manufactoring',
  templateUrl: './manufactoring.component.html',
  styleUrls: ['./manufactoring.component.scss']
})
export class ManufactoringComponent implements OnInit {

  formations$!: Observable<Formation[]>;


  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.formations$ = this.fetchAll();
  }

  fetchAll(): Observable<Formation[]>{
    return this.formationService.fetchAllmanufactoring();

  }
  createFormation(){
    console.log("done");
    this.formations$ = this.fetchAll();
  }
  Godetails(title: any){
    this.router.navigate(['detail/'+title]) ;
      }

}
