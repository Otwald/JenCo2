import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventSetting } from 'src/app/pages/_shared/eventsetting';
import { Timeblock } from 'src/app/pages/_shared/timeblock';
import { AdminService } from '../../_services/admin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Input() timeBlock: Timeblock = {};
  @Output() editClose = new EventEmitter();
  public tbForm = this.fb.group({
    id: [],
    name: [''],
    pnp: [true],
    start: this.fb.group({
      day: [],
      time: [],
    }),
    end: this.fb.group({
      day: [],
      time: [],
    }),
    max_table: [5],
  });
  public eventSetting: EventSetting;
  public timeSettings?: { value: Date; name: string }[] = [];
  constructor(private fb: FormBuilder, private as: AdminService) {
    this.eventSetting = this.as.getEventSettingJson();
    this.eventSetting.start = new Date(this.eventSetting.start as Date);
    this.eventSetting.end = new Date(this.eventSetting.end as Date);
  }

  ngOnInit(): void {
    if (this.timeBlock.id) {
      this.tbForm.setValue({
        id: this.timeBlock.id,
        name: this.timeBlock.name,
        pnp: this.timeBlock.pnp,
        max_table: this.timeBlock.max_table,
        start: {
          day: this.timeBlock.start,
          time: new Date(this.timeBlock.start as Date).toTimeString(),
        },
        end: {
          day: this.timeBlock.end,
          time: new Date(this.timeBlock.end as Date).toTimeString(),
        },
      });
    }
    this.createTimeSetting(
      this.eventSetting.start as Date,
      this.eventSetting.end as Date
    );
    this.tbForm.valueChanges.subscribe((form) => {
      this.tbForm.value.start.day = new Date(form.start.day);
      this.tbForm.value.end.day = new Date(form.end.day);
    });
  }

  onSave(): void {
    let form = this.tbForm.value;
    let end = form.end;
    let start = form.start;
    this.as.onSaveTimeBlock({
      id: form.id,
      name: form.name,
      pnp: form.pnp,
      max_table: form.max_table,
      end: new Date(
        new Date(end.day).setHours(
          new Date('1970-01-01T' + end.time).getHours()
        )
      ),
      start: new Date(
        new Date(start.day).setHours(
          new Date('1970-01-01T' + start.time).getHours()
        )
      ),
    } as Timeblock);
    this.onEmitClose();
  }

  onEmitClose(): void {
    this.editClose.emit();
  }

  createTimeSetting(start: Date, end: Date): void {
    for (let i = start; i <= end; i.setDate(i.getDate() + 1)) {
      this.timeSettings?.push({
        value: new Date(i.toDateString()),
        name: i.toLocaleString('De-DE', { weekday: 'short' }),
      });
    }
  }
}
