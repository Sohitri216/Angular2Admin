import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import {LoginComponent,
		ForgetPasswordComponent} from "./components/index";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule        
    ],
    declarations: [
        LoginComponent,
		ForgetPasswordComponent
    ],
    exports: [
        LoginComponent,
		ForgetPasswordComponent,
        RouterModule,
        FormsModule        
    ],
    providers: []
})
export class PublicModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PublicModule,
            providers: []
        };
    }
 }
