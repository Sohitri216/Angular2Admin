import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';


import { AppComponent } from './app.component';

import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { VendorModule } from './vendor/vendor.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,{useHash:true}),
    PublicModule.forRoot(),
    SharedModule.forRoot(),
    VendorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
