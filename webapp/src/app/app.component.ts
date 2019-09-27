import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  active_menu: boolean = true;
  currentUser: User;

  constructor(
    private router: Router,
    private authenticacionService: AuthenticationService
  ) {
    this.authenticacionService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticacionService.logout();
    this.router.navigate(['/login']);
  }
}
