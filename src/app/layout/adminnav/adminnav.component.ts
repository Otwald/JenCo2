import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.scss'],
})
export class AdminnavComponent implements OnInit {
  public items = [
    {
      route: 'users',
      title: 'Nutzerverwaltung',
      name: 'Nutzerverwaltung',
    },
    {
      route: 'general',
      title: 'Eventverwaltung',
      name: 'Eventverwaltung',
    },
    {
      route: 'timeblocks',
      title: 'ZeitBlockverwaltung',
      name: 'ZeitBlockverwaltung',
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
