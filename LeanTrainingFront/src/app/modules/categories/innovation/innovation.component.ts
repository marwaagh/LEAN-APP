import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-innovation',
  templateUrl: './innovation.component.html',
  styleUrls: ['./innovation.component.scss']
})
export class InnovationComponent implements OnInit {
  formations$!: Observable<Formation[]>;


  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.formations$ = this.fetchAll();
  }

  fetchAll(): Observable<Formation[]>{
    return this.formationService.fetchAllinnovation();

  }
  createFormation(){
    console.log("done");
    this.formations$ = this.fetchAll();
  }
  Godetails(title: any){
    this.router.navigate(['detail/'+title]) ;
      }

}
