import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  }

  private timeBlocksSource = new Subject<Timeblock[]>();
  public timeBlocks$: Observable<Timeblock[]> =
    this.timeBlocksSource.asObservable();

  onSaveTimeBlock(data: Timeblock) {
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

  //TODO change to Api Request
  setTimeBlockJson(data: Array<Timeblock>) {
    this.timeBlocksSource.next(data);
    localStorage.setItem('time_jsons', JSON.stringify(data));
  }

  //TODO change to Api Request
  getTimeBlockJson(): Array<Timeblock> {
    return JSON.parse(localStorage.getItem('time_jsons') as string);
  }
}
