import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './componets/home/home.component';
import{RegisterComponent} from './componets/register/register.component';
import{SearchComponent} from './componets/search/search.component';
import{InfoComponent} from './componets/info/info.component';
import{ContactComponent} from './componets/contact/contact.component';
import { LoginComponent } from './componets/login/login.component';
import {IniComponent} from './componets/ini/ini.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',   
    redirectTo:'/login',
    pathMatch : 'full'
  },


  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'',
    component:IniComponent,
    canActivate: [AuthGuard],
    children:[ {
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
   ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
