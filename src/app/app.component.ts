import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('auth') auth;
  @ViewChild('authInt') authInterceptor;
  @ViewChild('rewriteInt') rewriteInterceptor;
  authToken: String;

  title = 'A5P2 Demo';
  tokenHeader = 'Auth-Token';
  rewriteQueryParams = {
    authToken: (isLocal, host, url) => {
      if (url.includes('/profile-picture')) {
        return this.auth.nativeElement.authToken;
      }
    },
  };
  rewriteEvents = [
    {
      name: 'iron-ajax-presend',
      path: 'detail.options.url',
    },
    {
      name: 'upload-before',
      path: 'detail.file.uploadTarget',
    },
    {
      name: 'profile-picture-src',
      path: 'detail.url',
    },
    {
      name: 'ci-url-rewrite',
      path: 'detail.url',
    },
  ];

  constructor(router: Router) {}

  /** Shim interceptors */
  rewrite(event, eventName = event.type) {
    const interceptor = this.rewriteInterceptor.nativeElement;
    interceptor.queryParams = this.rewriteQueryParams;
    interceptor.events = this.rewriteEvents;
    interceptor.intercept(event, eventName);
  }
  authenticate(event, eventName = event.type) {
    const interceptor = this.authInterceptor.nativeElement;
    const auth = this.auth.nativeElement;
    interceptor.value = auth.authToken;
    interceptor.key = this.tokenHeader;
    interceptor.intercept(event, eventName);
  }

}
