import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniComponent } from './componets/ini/ini.component';
import { NavComponent } from './componets/nav/nav.component';
import { InfoComponent } from './componets/info/info.component';
import { RegisterComponent } from './componets/register/register.component';
import { SearchComponent } from './componets/search/search.component';
import { HomeComponent } from './componets/home/home.component';
import { ContactComponent } from './componets/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    IniComponent,
    NavComponent,
    InfoComponent,
    RegisterComponent,
    SearchComponent,
    HomeComponent,
    ContactComponent
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
