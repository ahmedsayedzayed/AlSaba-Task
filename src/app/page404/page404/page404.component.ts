import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  public isLoggedIn!: Boolean;
  constructor(private authSVC:AuthService) { }

  ngOnInit(): void {
    this.authSVC.userPermessions$.subscribe(res => {
      if (res.length == 0) {
        this.isLoggedIn = false;
      } else { 
        this.isLoggedIn = true;
      }
    })
  }

}
