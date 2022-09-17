import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  emailDisplay: any;
  dataStudent: any;

  constructor(private route: ActivatedRoute, private authService: AuthService) { 
    
    this.route.queryParams.subscribe((params: any)=>{
      console.log(params.data);
      this.emailDisplay = params.data;
    })
  }

  ngOnInit(): void {
  this.authService.find(this.emailDisplay).subscribe(data =>{
    this.dataStudent = data ;
    console.log(this.dataStudent[0]);
  })
  }
 
}
