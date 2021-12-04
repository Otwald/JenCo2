import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public selectBlock: number = 0;

  constructor(
    private rS: RoundService,
    private gS: GeneralService,
    private router: Router,
    private route: ActivatedRoute
  ) {
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
    if (!this.rounds[id as number]) {
      return 0;
    }
    return this.rounds[id as number].length;
  }

  setSelectBlock(id?: number): void {
    if (id === this.selectBlock) {
      this.selectBlock = 0;
      return;
    }
    this.selectBlock = id as number;
  }

  selectRound(id?: number) {
    this.router.navigate(['details', id], { relativeTo: this.route });
  }
}
