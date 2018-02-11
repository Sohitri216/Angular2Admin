import { Route } from "@angular/router";

import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component'



export const PublicRoutes : Route[] = [
	{
		path:'',
		redirectTo:'/login',
		pathMatch:'full'
	},{
		path:'login',
		component:LoginComponent
	},{
		path:'forget-password',
		component: ForgetPasswordComponent
	}
]