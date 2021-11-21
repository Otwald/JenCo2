import { Component, OnInit } from '@angular/core';
import { EventSetting } from '../../_shared/eventsetting';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  public eventSetting?: EventSetting;
  public items?: Array<{ name: string; value: any }>;
  public edit: boolean = false;
  constructor(private as: AdminService) {
    this.as.getTimeBlockJson();
    this.as.eventSetting$.subscribe((next) => {
      this.eventSetting = next;
      this.setEventItems();
    });
  }

  ngOnInit(): void {
    this.eventSetting = this.as.getEventSettingJson();
    this.setEventItems();
  }

  setEventItems() {
    this.items = [
      {
        value: this.eventSetting?.start,
        name: 'Event-Start',
      },
      {
        value: this.eventSetting?.end,
        name: 'Event-End',
      },
      {
        value: this.eventSetting?.loc,
        name: 'Event-Location',
      },
      {
        value: this.eventSetting?.ticketPrice,
        name: 'Teilnahme-Preis',
      },
      {
        value: this.eventSetting?.eventPrice,
        name: 'Event-Kosten',
      },
      {
        value: 0, //{(eventPay / e_price) * 100}% bezahlt
        name: 'Event Rechnung',
      },
    ];
  }
}
