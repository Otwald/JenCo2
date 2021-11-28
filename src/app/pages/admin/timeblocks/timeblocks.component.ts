import { Component, OnInit } from '@angular/core';
import { Timeblock } from '../../_shared/timeblock';
import { GeneralService } from '../../_shared/_service/general.service';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-timeblocks',
  templateUrl: './timeblocks.component.html',
  styleUrls: ['./timeblocks.component.scss'],
})
export class TimeblocksComponent implements OnInit {
  public timeblocks: Array<Timeblock> = [];
  public selectBlock: number = 0;
  public editBlock: boolean = false;
  constructor(private as: AdminService, private gS: GeneralService) {
    this.as.getTimeBlockJson();
    this.as.timeBlocks$.subscribe((next) => {
      this.timeblocks = next;
    });
  }

  ngOnInit(): void {
    this.timeblocks = this.as.getTimeBlockJson();
  }

  getDateFormate(data?: Date): string {
    return this.gS.getDateFormate(data);
  }

  setselectBlock(id: any): void {
    this.editBlock = false;
    if (id == this.selectBlock) {
      this.selectBlock = 0;
      return;
    }
    this.selectBlock = id as number;
  }

  onEditEnd(): void {
    this.editBlock = false;
  }
}
