import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public constructor(private router:Router){}

    goToRegister(){
      console.log("clicked signup");
    
      this.router.navigateByUrl('signup');
    }
    
}
