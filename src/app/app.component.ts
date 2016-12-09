import { Component } from '@angular/core';
import { CoreUINavItem, CoreUIConfig } from 'coreui-angular/dist';

@Component({
  selector: 'app-root',
  template: `
    <coreui-layout [config]="config">
      <router-outlet>{{title}}</router-outlet>
    </coreui-layout>
  `,
})
export class AppComponent {
  title = 'This is my App Component';

  private headerNav: CoreUINavItem[] = [
    { label: 'Dashboard', link: ['/', 'dashboard'] },
    { label: 'Users',     link: ['/', 'users'] },
    { label: 'Settings',  link: ['/', 'settings'] },
  ];

  private mainNav: CoreUINavItem[] = [
    { label: 'Dashboard', icon: 'icon-speedometer', link: ['/', 'dashboard'] },
    { label: 'Settings',  icon: 'icon-settings',    link: ['/', 'settings'] },
  ];

  private sidebarNav: CoreUINavItem[] = [
    { type: 'item', label: 'Dashboard', icon: 'icon-speedometer', link: ['/', 'dashboard'] },
    { type: 'item', label: 'Events',    icon: 'icon-calendar',    link: ['/', 'events'] },
    { type: 'item', label: 'Posts',     icon: 'icon-pencil',      link: ['/', 'posts'] },
    { type: 'item', label: 'Products',  icon: 'icon-basket',      link: ['/', 'products'] },
    { type: 'item', label: 'Tags',      icon: 'icon-tag',         link: ['/', 'tags'] },
  ];

  config: CoreUIConfig = {
    footer: {
      left: '<a href="">coreui-angular-demo</a>',
      right: 'beeman 2016',
    },
    header: {
      aside: false,
      nav: this.headerNav,
    },
    main: {
      breadcrumbs: true,
      nav: this.mainNav,
    },
    sidebar: {
      nav: this.sidebarNav,
    }
  };

}
