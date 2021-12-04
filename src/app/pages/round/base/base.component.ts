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
  public buildTB = [
    { name: 'Start', value: 'start' },
    { name: 'Ende', value: 'end' },
    { name: 'Tisch', value: 'table' },
  ];
  public buildRound = [
    { name: 'Runden Name', value: 'name' },
    { name: 'Setting', value: 'setting' },
    { name: 'Regelwerk', value: 'ruleset' },
    { name: 'Spieler', value: 'player' },
  ];

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

  /**
   * Small Helper Function for the Loop in HTMl to build values
   * @param block
   * @param cap Captalisation String
   * @returns
   */
  buildTBValues(block: Timeblock, cap: string): string {
    if (cap === 'start' || cap === 'end') {
      return this.getDateFormate(block[cap]);
    }
    return `${this.getTableCount(block.id)}/${block.max_table}`;
  }

  buildRoundValues(round: Round, cap: string): string {
    return (round as any)[cap];
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
