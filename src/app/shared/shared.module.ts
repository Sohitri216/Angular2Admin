import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import { FormsModule } from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination';

//for modal
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

//for loading bar
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

//components
import {AbstractComponent,DataTableComponent} from "./components/index";

//services
import {ToasterService} from './services/toaster-service';
import { ModalService } from './services/modal-service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        Ng2TableModule,
        FormsModule,
        PaginationModule.forRoot(),
        ToastyModule.forRoot(),
        ModalModule.forRoot(),
        BootstrapModalModule,
        SlimLoadingBarModule.forRoot()
    ],
    declarations: [
        AbstractComponent,
        DataTableComponent
    ],
    exports: [
        AbstractComponent,
        RouterModule,
        ToastyModule,
        Ng2TableModule,
        DataTableComponent,
        ModalModule,
        BootstrapModalModule,
        SlimLoadingBarModule
    ],
    providers: [ToasterService, ModalService]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ToasterService, ModalService]
        };
    }
 }
