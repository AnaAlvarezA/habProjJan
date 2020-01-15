import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';


import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from '../features/home/home.component';
import { PrivateAreaComponent } from '../features/private-area/private-area.component';
import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [HomeComponent,
    PrivateAreaComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    ServicesComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FeaturesRoutingModule,
    LayoutModule,
    FormsModule
  ],
  exports: [HomeComponent,
    PrivateAreaComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    ServicesComponent,
    ProfileComponent]

})
export class FeaturesModule { }
