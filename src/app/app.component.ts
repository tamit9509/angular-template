import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pms';
  isSidebarOpen: boolean;

  showSidebar(event) {
    this.isSidebarOpen = event;
  }
}
