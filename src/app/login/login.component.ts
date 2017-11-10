import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent {
  @ViewChild('auth') auth;

  model: any = {};
  loading = false;
  returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }


    ngOnInit() {
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.auth.nativeElement.signIn(this.model.username, this.model.password).then(
          () => {
            this.router.navigate([this.returnUrl]);
          }
        );
    }
}
