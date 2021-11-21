import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventSetting } from '../../_shared/eventsetting';
import { Timeblock } from '../../_shared/timeblock';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {
    this.setTimeBlockJson([
      {
        id: 1,
        name: 'Test1',
        pnp: true,
        start: new Date(),
        end: new Date(),
        max_table: 5,
      },
      {
        id: 2,
        name: 'Test2',
        pnp: true,
        start: new Date(),
        end: new Date(),
        max_table: 5,
      },
      {
        id: 3,
        name: 'Test3',
        pnp: true,
        start: new Date(),
        end: new Date(),
        max_table: 5,
      },
    ]);
    this.onSaveEventSetting({
      end: new Date('2021-11-20'),
      loc: '',
      start: new Date('2021-11-21'),
      ticketPrice: 0,
      eventPrice: 0,
    } as EventSetting);
  }

  private timeBlocksSource = new Subject<Timeblock[]>();
  public timeBlocks$: Observable<Timeblock[]> =
    this.timeBlocksSource.asObservable();

  private eventSettingSource = new Subject<EventSetting>();
  public eventSetting$: Observable<EventSetting> =
    this.eventSettingSource.asObservable();

  onSaveTimeBlock(data: Timeblock): void {
    let timeBlocks = this.getTimeBlockJson();
    if (data.id) {
      timeBlocks.forEach((element, index) => {
        if (element.id !== data.id) {
          return;
        }
        timeBlocks[index] = data;
      });
    } else {
      //TODO remove when dataBase exists
      data.id = timeBlocks.length + 1;
      timeBlocks.push(data);
    }
    this.setTimeBlockJson(timeBlocks);
  }

  onSaveEventSetting(data: EventSetting): void {
    this.setEventSettingJson(data);
  }

  private setEventSettingJson(data: EventSetting): void {
    this.eventSettingSource.next(data);
    localStorage.setItem('event_json', JSON.stringify(data));
  }
  getEventSettingJson(): EventSetting {
    return JSON.parse(localStorage.getItem('event_json') as string);
  }

  //TODO change to Api Request
  private setTimeBlockJson(data: Array<Timeblock>): void {
    this.timeBlocksSource.next(data);
    localStorage.setItem('time_jsons', JSON.stringify(data));
  }

  //TODO change to Api Request
  getTimeBlockJson(): Array<Timeblock> {
    return JSON.parse(localStorage.getItem('time_jsons') as string);
  }
}
