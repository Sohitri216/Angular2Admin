import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {DashboardComponent,
    PaymentComponent,
    ProfileComponent,
    ContactComponent,
    MenuComponent,
    OrderComponent
} from "./components/index";

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent,
        PaymentComponent,
        ProfileComponent,
        ContactComponent,
        MenuComponent,
        OrderComponent
    ],
    exports: [
        DashboardComponent,
        PaymentComponent,
        ProfileComponent,
        ContactComponent,
        MenuComponent,
        OrderComponent,
        RouterModule
    ],
    providers: []
})
export class VendorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: VendorModule,
            providers: []
        };
    }
 }
