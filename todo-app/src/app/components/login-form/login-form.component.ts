import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  @Input() queryParams:String ="";

  ngOnInit() {
    console.log("queryParams:", this.queryParams);
    
  }

}
