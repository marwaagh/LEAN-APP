import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboredComponent } from './modules/dashbored/dashbored.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DefaultModule } from './layouts/default/default.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { AboutComponent } from './modules/about/about.component';
import { AccountComponent } from './modules/account/account.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ManufactoringComponent } from './modules/categories/manufactoring/manufactoring.component';
import { QualiteComponent } from './modules/categories/qualite/qualite.component';
import { EnvironmentComponent } from './modules/categories/environment/environment.component';
import { SupplychComponent } from './modules/categories/supplych/supplych.component';
import { LeadershipComponent } from './modules/categories/leadership/leadership.component';
import { InnovationComponent } from './modules/categories/innovation/innovation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';
import { AccountAdminComponent } from './modules/account-admin/account-admin.component';
import { FormationDetailComponent } from './modules/formation-detail/formation-detail.component';
import { FormationDetailModule } from './modules/formation-detail/formation-detail.module';
import { OnlineComponent } from './modules/online/online.component';



@NgModule({
  declarations: [ 
    AppComponent,
    AboutComponent,
    ContactComponent,
    ManufactoringComponent,
    QualiteComponent,
    EnvironmentComponent,
    SupplychComponent,
    LeadershipComponent,
    InnovationComponent,
    AccountComponent,
    SigninComponent,
    SignupComponent,
    AccountAdminComponent,
    FormationDetailComponent,
    OnlineComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    OwlModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormationDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
