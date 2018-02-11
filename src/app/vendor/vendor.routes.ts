import { Route } from "@angular/router";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { AbstractComponent } from '../shared/components/abstract/abstract.component';
import { DataTableComponent } from '../shared/components/data-table/data-table.component';



export const VendorRoutes : Route[] = [
	{
		path:'vendor',
		component:AbstractComponent,
		children:[{ 
			path: '', 
			redirectTo: '/vendor/dashboard', 
			pathMatch: 'full' 
		},{
			path:'dashboard',
			component:DashboardComponent
		},{
			path:'payment',
			component:PaymentComponent
		},{
			path:'profile',
			component:ProfileComponent
		},{
			path:'contact',
			component:ContactComponent
		},{
			path:'menu-management',
			component:MenuComponent
		},{
			path:'order-management',
			component:OrderComponent
		}]
	}

	// path:user/details/id,
	 //  children:

]

