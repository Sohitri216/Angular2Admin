import { Component } from '@angular/core';
import {
	Router,
	NavigationStart,
	Event as NavigationEvent,
	NavigationEnd,
	NavigationCancel,
	NavigationError
} from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(router: Router,
	  private loaderService: SlimLoadingBarService){

	  router.events.subscribe((event: NavigationEvent) => {
			// start route change loader
		  if (event instanceof NavigationStart) {
			  loaderService.start();
		  }
			// end route change loader
		  if (event instanceof NavigationEnd) {
			  loaderService.complete();
			  //this.routeEndsFunc(router.routerState.snapshot.url);
		  }
			// end route change loader
		  if (event instanceof NavigationError) {
			  //this.routeEndsFunc(router.routerState.snapshot.url);
		  }
			// end route change loader
		  if (event instanceof NavigationCancel) {
			  //this.routeEndsFunc(router.routerState.snapshot.url);
		  }
	  });
  }
}
