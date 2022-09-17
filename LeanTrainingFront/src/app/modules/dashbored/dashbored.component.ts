import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.scss']
})
export class DashboredComponent implements OnInit {

  constructor() { }

  public user = {
  username:'',
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  };

  ngOnInit(): void {
  }

  formSubmit(){
    alert("submit");
  }

}