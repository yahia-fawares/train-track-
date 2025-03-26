import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-components/login/login.component';
import { RegisterComponent } from './components/register-components/register/register.component';
import { MapComponent } from './components/home-components/map/map.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'',
        component:MapComponent
    }
];
