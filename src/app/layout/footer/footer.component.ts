import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public items = [
    { route: 'impressum', title: 'Impressum', name: 'Impressum' },
    { route: 'dataprivacy', title: 'Datenschutz', name: 'Datenschutz' },
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
