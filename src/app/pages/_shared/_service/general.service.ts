import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  getDateFormate(data?: Date): string {
    let temp = new Date(data as Date);
    return (
      temp.toLocaleString('de-DE', { weekday: 'short' }) +
      ' ' +
      temp.toLocaleTimeString('de-DE', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      })
    );
  }
}
