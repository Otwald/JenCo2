import { Component, OnInit } from '@angular/core';
import { Round } from '../../_shared/round';
import { Timeblock } from '../../_shared/timeblock';
import { GeneralService } from '../../_shared/_service/general.service';
import { RoundService } from '../_services/round.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  public timeBlocks: Timeblock[] = [];
  public rounds?;
  constructor(private rS: RoundService, private gS: GeneralService) {
    this.rounds = this.rS.getRoundJson();
    this.rS.round$.subscribe((data) => {
      this.rounds = data;
    });
  }

  ngOnInit(): void {
    this.timeBlocks = this.rS.getTimeBlockJson();
  }

  getDateFormate(data?: Date): string {
    return this.gS.getDateFormate(data);
  }

  getTableCount(id?: number): number {
    return this.rounds ? this.rounds[id as number].length : 0;
  }
}
