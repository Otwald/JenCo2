import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Round } from '../../_shared/round';
import { Timeblock } from '../../_shared/timeblock';

@Injectable({
  providedIn: 'root',
})
export class RoundService {
  constructor() {
    this.setRoundJson({
      id: 1,
      block_id: 1,
      name: 'Test',
      setting: 'Test',
      ruleset: 'Test',
      dec: 'Test',
      table_num: 1,
      own_char: false,
      max_online_pl: 0,
      max_pl: 5,
      gm: 'Tom',
      players: [],
    });
  }

  //TODO after APi Check what service to Merge

  // private timeBlocksSource = new Subject<Timeblock[]>();
  // public timeBlocks$: Observable<Timeblock[]> =
  //   this.timeBlocksSource.asObservable();

  private roundSource = new Subject<Round[]>();
  private selectBlockSource = new Subject<Number>();
  public round$: Observable<Round[]> = this.roundSource.asObservable();
  public select$: Observable<Number> = this.selectBlockSource.asObservable();
  public selectBlock: number = 0;

  public setSeclectBlock(id: number) {
    this.selectBlock = id;
    this.selectBlockSource.next(id);
  }

  //TODO change to Api Request
  private setRoundJson(data: Round): void {
    let roundObject = this.getRoundJson();
    if (roundObject !== null) {
      let rounds: Round[] = roundObject[data.block_id];
      if (rounds) {
        let ind;
        rounds.map((round, index) => {
          if (round.id == data.id) {
            ind = index;
          }
        });
        if (ind) {
          rounds[ind] = data;
        } else {
          rounds.push(data);
        }
      } else {
        rounds = [data];
      }
    } else {
      roundObject = {};
      roundObject[data.block_id] = [data];
    }
    this.roundSource.next(roundObject);
    localStorage.setItem('round_json', JSON.stringify(roundObject));
  }

  getRoundJson() {
    return JSON.parse(localStorage.getItem('round_json') as string);
  }

  //TODO change to Api Request
  getTimeBlockJson(): Timeblock[] {
    return JSON.parse(localStorage.getItem('time_jsons') as string);
  }
}
