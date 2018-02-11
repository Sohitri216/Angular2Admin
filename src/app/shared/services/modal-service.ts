import { Injectable } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Injectable()
export class ModalService {

	constructor(overlay: Overlay,
				public modal: Modal) {
	}

	openModal (config, type) {
		if(type='confirm'){
			let modal = this.modal.confirm()
            .size('sm')
            .isBlocking(true)
            .showClose(true)
            .keyboard(27)
            .title(config.title)
            .body(config.body)
	        .open();
			return modal;	    
		}		
	}

}
