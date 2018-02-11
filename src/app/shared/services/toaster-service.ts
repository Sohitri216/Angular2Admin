import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable()
export class ToasterService {


    constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
        this.toastyConfig.theme = 'material';
    }

    toastOptions: ToastOptions = {
        title: 'My title',
        msg: 'The message',
        showClose: true,
        timeout: 5000,
        theme: 'material',
        onAdd: (toast: ToastData) => {
            // console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function (toast: ToastData) {
            // console.log('Toast ' + toast.id + ' has been removed!');
        }
    };
    

    success(title: string, msg: string): void {
        let toastOpt = JSON.parse(JSON.stringify(this.toastOptions));
        toastOpt.title = title;
        toastOpt.msg = msg;
        this.toastyService.success(toastOpt);
    }

    wait(title: string, msg: string): void {
        let toastOpt = JSON.parse(JSON.stringify(this.toastOptions));
        toastOpt.title = title;
        toastOpt.msg = msg;
        this.toastyService.wait(toastOpt);
    }

    error(title: string, msg: string): void {
        let toastOpt = JSON.parse(JSON.stringify(this.toastOptions));
        toastOpt.title = title;
        toastOpt.msg = msg;
        this.toastyService.error(toastOpt);
    }

    info(title: string, msg: string): void {
        let toastOpt = JSON.parse(JSON.stringify(this.toastOptions));
        toastOpt.title = title;
        toastOpt.msg = msg;
        this.toastyService.info(toastOpt);
    }

    warning(title: string, msg: string): void {
        let toastOpt = JSON.parse(JSON.stringify(this.toastOptions));
        toastOpt.title = title;
        toastOpt.msg = msg;
        this.toastyService.warning(toastOpt);
    }

    default(title: string, msg: string): void {
        let toastOpt = JSON.parse(JSON.stringify(this.toastOptions));
        toastOpt.title = title;
        toastOpt.msg = msg;
        this.toastyService.default(toastOpt);
    }
}