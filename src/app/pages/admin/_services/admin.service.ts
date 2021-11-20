import { Injectable } from '@angular/core';
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
  //TODO change to Api Request
  setTimeBlockJson(data: Array<Timeblock>) {
    return localStorage.setItem('time_jsons', JSON.stringify(data));
  }

  //TODO change to Api Request
  getTimeBlockJson(): Array<Timeblock> {
    return JSON.parse(localStorage.getItem('time_jsons') as string);
  }
}
