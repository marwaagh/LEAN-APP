import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-supplych',
  templateUrl: './supplych.component.html',
  styleUrls: ['./supplych.component.scss']
})
export class SupplychComponent implements OnInit {

  formations$!: Observable<Formation[]>;


  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.formations$ = this.fetchAll();
  }

  fetchAll(): Observable<Formation[]>{
    return this.formationService.fetchAllsupplychain();

  }
  createFormation(){
    console.log("done");
    this.formations$ = this.fetchAll();
  }
  Godetails(title: any){
    this.router.navigate(['detail/'+title]) ;
      }
}
