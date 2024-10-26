import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const routes: Routes = [
{path:'header', component:HeaderComponent},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'cart', component:CartComponent},
{path:'restaurants', component:RestaurantsComponent},
{path:'', redirectTo:'/home', pathMatch:'full'}
];
