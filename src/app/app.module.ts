import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRootSecondComponent } from './app-root-second/app-root-second.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRootSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppRootSecondComponent]
})
export class AppModule { }
