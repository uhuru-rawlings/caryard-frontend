import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CarsComponent } from './cars/cars.component';
import { DetailsComponent } from './details/details.component';
import { MessagesComponent } from './messages/messages.component';
import { UploadsComponent } from './uploads/uploads.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
const routes: Routes = [
{path:'',component:HomepageComponent},
{path:'/cars',component:CarsComponent},
{path:'/car/details',component:DetailsComponent},
{path:'/user/messages',component:MessagesComponent},
{path:'/user/uploads',component:UploadsComponent},
{path:'/user/profile',component:ProfileComponent},
{path:'/user/contact',component:ContactsComponent},
{path:'/user/login',component:LoginComponent},
{path:'/user/register',component:SignupComponent},
{path:'/user/reset_password',component:ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
