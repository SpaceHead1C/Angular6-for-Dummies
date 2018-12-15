import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { InMemoryDataService } from './api/in-memory-data.service';
import { UserFormComponent } from './forms/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(), // "forRoot()" only for main module required
    HttpClientModule,
    // Please, remove this when real API will be ready
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
    //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
