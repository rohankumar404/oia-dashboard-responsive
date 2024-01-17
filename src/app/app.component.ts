import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oia-dashboard';
  isSidenavExpanded = true;

  toggleSidenav() {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }
}
