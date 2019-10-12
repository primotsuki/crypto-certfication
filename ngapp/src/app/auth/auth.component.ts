import { Component } from '@angular/core';

@Component({
    selector: 'ngx-auth',
    template: `
    <nb-layout>
      <router-outlet></router-outlet>
    </nb-layout>
    `,
})
export class AuthComponent {
}
