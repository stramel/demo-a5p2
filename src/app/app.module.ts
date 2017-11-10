import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PolymerModule } from '@codebakery/origami';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule, // Required to connect elements to Angular forms
    PolymerModule.forRoot(), // Only import .forRoot() once and at the highest level
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
