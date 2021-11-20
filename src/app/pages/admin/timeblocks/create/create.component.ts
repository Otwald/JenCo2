import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Timeblock } from 'src/app/pages/_shared/timeblock';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Input() timeBlock: Timeblock = {};
  public tbForm = this.fb.group({
    id: [],
    name: [''],
    pnp: [true],
    start: [],
    end: [],
    max_table: [5],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.timeBlock.id) {
      console.log(this.timeBlock);
      this.tbForm.setValue(this.timeBlock);
    }
  }
}
