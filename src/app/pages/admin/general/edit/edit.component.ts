import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventSetting } from 'src/app/pages/_shared/eventsetting';
import { AdminService } from '../../_services/admin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() eventSettings?: EventSetting;
  @Output() editClose = new EventEmitter();
  public eventForm = this.fb.group({
    end: [],
    loc: [],
    start: [],
    ticketPrice: [],
    eventPrice: [],
  });
  constructor(private fb: FormBuilder, private as: AdminService) {}

  ngOnInit(): void {
    if (this.eventSettings) {
      console.log(this.eventSettings);
      this.eventForm.setValue(this.eventSettings as EventSetting);
    }
  }

  onSave(): void {
    this.as.onSaveEventSetting(this.eventForm.value as EventSetting);
    this.onEditClose();
  }

  onEditClose(): void {
    this.editClose.emit();
  }
}
