import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AmenitiesComponent } from './aminities/amenities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PackagesComponent } from './packages/packages.component';
import { CallrequestComponent } from './callrequest/callrequest.component';
import { ReservenowComponent } from './reservenow/reservenow.component';
import { PrereserveComponent } from './prereserve/prereserve.component';
import { VisitComponent } from './visit/visit.component';
import { VisittableComponent } from './visittable/visittable.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path :'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'amenities',component:AmenitiesComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'packages',component:PackagesComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'register',component:CreateComponentComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'list',component:RegistrationListComponent },
  {path:'callreturn',component:CallrequestComponent},
  { path: 'update/:id', component: CreateComponentComponent },
  {path:'details/:id' ,component:UserDetailsComponent},
  {path:'reservenowform', component:ReservenowComponent},
  {path:'prereserve', component:PrereserveComponent},
  {path:'visitform', component:VisitComponent},
  {path:'visittable',component:VisittableComponent},
  {path:'admin', component:AdminComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
