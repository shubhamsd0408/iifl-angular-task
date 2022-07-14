import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompaniesDirectoryComponent } from './companies-directory/companies-directory.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    CompaniesDirectoryComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
