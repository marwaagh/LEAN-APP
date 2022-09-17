import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboredComponent } from './modules/dashbored/dashbored.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SigninComponent } from './modules/signin/signin.component';
import { ContactComponent } from './modules/contact/contact.component' ;
import { AboutComponent } from './modules/about/about.component' ;
import { SignupComponent } from './modules/signup/signup.component';
import { ManufactoringComponent } from './modules/categories/manufactoring/manufactoring.component';
import { QualiteComponent } from './modules/categories/qualite/qualite.component';
import { SupplychComponent } from './modules/categories/supplych/supplych.component';
import { EnvironmentComponent } from './modules/categories/environment/environment.component';
import { InnovationComponent } from './modules/categories/innovation/innovation.component';
import { AccountComponent } from './modules/account/account.component';
import { LeadershipComponent } from './modules/categories/leadership/leadership.component';
import { AccountAdminComponent } from './modules/account-admin/account-admin.component';
import { FormationDetailComponent } from './modules/formation-detail/formation-detail.component';
import { OnlineComponent } from './modules/online/online.component';


const routes: Routes = [{
  path:'',
  component : DefaultComponent,
  children: [
{ path:'', component: DashboredComponent },
{ path: 'signin', component: SigninComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'posts', component: PostsComponent },
{ path: 'manufactoring', component: ManufactoringComponent },
{ path: 'qualite', component: QualiteComponent },
{ path: 'leadership', component: LeadershipComponent },
{ path: 'supplych', component: SupplychComponent },
{ path: 'environment', component: EnvironmentComponent },
{ path: 'innovation', component: InnovationComponent },
{ path: 'contact', component: ContactComponent }, 
{ path: 'about', component: AboutComponent }, 
{ path: 'account', component: AccountComponent },
{ path: 'account-admin', component: AccountAdminComponent }, 
{ path: 'online', component: OnlineComponent }, 
{ path: 'detail/:title', loadChildren: ()=> import('./modules/formation-detail/formation-detail.module').then(m => m.FormationDetailModule) }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
