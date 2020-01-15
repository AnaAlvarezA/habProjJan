import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { PrivateAreaComponent } from './features/private-area/private-area.component';
import { HomeComponent } from './features/home/home.component';
import { MainStartComponent } from './layout/main-start/main-start.component';
import { LoginComponent } from '././features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { NavigationProviderComponent } from './layout/navigation-provider/navigation-provider.component';
import { NavigationClientComponent } from './layout/navigation-client/navigation-client.component';
import { ProfileComponent } from './features/profile/profile.component';


const routes: Routes = [
 {path: '', component: MainStartComponent},
{path: 'home', component: HomeComponent},
{path: 'private-area', component: PrivateAreaComponent},
{path: 'auth/login', component: LoginComponent},
{path: 'signup', component: RegisterComponent},

{path: 'provider-nav', component: NavigationProviderComponent},
{path: 'client-nav', component: NavigationClientComponent},
{path: 'private', component: PrivateAreaComponent},
{path: 'profile', component: ProfileComponent},


{path: '**', component: NotfoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
