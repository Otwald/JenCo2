import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    start: [],
    end: [],
    max_table: [5],
  });
  constructor(private fb: FormBuilder, private as: AdminService) {}

  ngOnInit(): void {
    if (this.timeBlock.id) {
      this.tbForm.setValue(this.timeBlock);
    }
  }

  onSave(): void {
    this.as.onSaveTimeBlock(this.tbForm.value as Timeblock);
    this.onEmitClose();
  }

  onEmitClose(): void {
    this.editClose.emit();
  }
}
