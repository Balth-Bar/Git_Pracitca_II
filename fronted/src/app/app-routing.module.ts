import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './componets/home/home.component';
import{RegisterComponent} from './componets/register/register.component';
import{SearchComponent} from './componets/search/search.component';
import{InfoComponent} from './componets/info/info.component';
import{ContactComponent} from './componets/contact/contact.component';

const routes: Routes = [
  {
    path: '',   
    redirectTo:'/home',
    pathMatch : 'full'
  },


  {
    path:'home',
    component:HomeComponent
  },

  
  {
    path:'register',
    component:RegisterComponent
  },

  {
    path:'search',
    component:SearchComponent
  },

  {
    path:'info',
    component:InfoComponent
  },

  {
    path:'contact',
    component:ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
