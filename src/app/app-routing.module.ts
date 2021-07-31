import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { ContentComponent } from './common-components/content/content.component';
import { SignInComponent } from './common-components/sign-in/sign-in.component';
import { CommonPannelComponent } from './common-components/common-pannel/common-pannel.component';
import { SignUpComponent } from './common-components/sign-up/sign-up.component';
import { AddnewpatientsComponent } from './web-components/addnewpatients/addnewpatients.component';
import { PatientsDetailsComponent } from './web-components/patients-details/patients-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',component: SignInComponent },
  { path: 'signup',component: SignUpComponent },
  
  {
    path: '',
    canActivate: [UserGuard],
    component: CommonPannelComponent,
    children: [
      {
        path: 'dashboard',
        component: ContentComponent,
      },
      {
        path: 'add-new-patents',
        component: AddnewpatientsComponent,
      },
      {
        path: 'View-patents-details/:id',
        component: PatientsDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
