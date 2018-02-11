import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PublicRoutes} from './public/public.routes';
import {VendorRoutes} from './vendor/vendor.routes';


export const routes: Routes = [
  ...PublicRoutes,
  ...VendorRoutes //spread operator for array concatination
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
