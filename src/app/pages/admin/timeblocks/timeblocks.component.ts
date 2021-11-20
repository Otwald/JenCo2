import { Component, OnInit } from '@angular/core';
import { Timeblock } from '../../_shared/timeblock';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-timeblocks',
  templateUrl: './timeblocks.component.html',
  styleUrls: ['./timeblocks.component.scss'],
})
export class TimeblocksComponent implements OnInit {
  public timeblocks: Array<Timeblock>;
  constructor(private as: AdminService) {
    this.timeblocks = this.as.getTimeBlockJson();
  }

  ngOnInit(): void {}
}
