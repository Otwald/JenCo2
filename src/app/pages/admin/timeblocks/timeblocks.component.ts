import { Component, OnInit } from '@angular/core';
import { Timeblock } from '../../_shared/timeblock';
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
  constructor(private as: AdminService) {
    this.as.getTimeBlockJson();
    this.as.timeBlocks$.subscribe((next) => {
      this.timeblocks = next;
    });
  }

  ngOnInit(): void {
    this.timeblocks = this.as.getTimeBlockJson();
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
