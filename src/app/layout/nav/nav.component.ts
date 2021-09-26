import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public items = [
    {
      route: 'welcome',
      title: 'Willkommen',
      name: 'Willkommen',
      icon: 'home_icon',
    },
    {
      route: 'round',
      title: 'Spielrunden',
      name: 'Spielrrunden',
      icon: 'box_icon',
    },
    {
      route: 'account',
      title: 'Account-Verwaltung',
      name: 'Account',
      icon: 'user_icon',
    },
    {
      route: 'admin',
      title: 'Seiten-Verwaltung',
      name: 'Admin-Bereich',
      icon: '',
    },
    { route: 'login', title: 'Anmeldung', name: 'Anmeldung', icon: 'key_icon' },
    {
      route: 'logout',
      title: 'Abmeldung',
      name: 'Abmeldung',
      icon: 'key_icon',
    },
  ];
  constructor(private titleTagService: Title) {}

  ngOnInit(): void {}
  /**
   * sets the the Title of the Page in the Header
   * @param pageTitle
   */
  public setTitle(pageTitle: string) {
    this.titleTagService.setTitle(pageTitle);
  }
}
