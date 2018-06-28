import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ServicesPage } from '../services/services';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ServicesPage;
  tab4Root = ServicesPage;
  
  tab5Root = ServicesPage;
  tab6Root = ServicesPage;
  tab7Root = ServicesPage;
  tab8Root = ServicesPage;

  tabsPlacement: string = 'bottom';
  tabsLayout: string = 'icon-top';

  constructor(public platform: Platform) {
    if (!this.platform.is('mobile')) {
      this.tabsPlacement = 'top';
      this.tabsLayout = 'icon-left';
  }
}
}
