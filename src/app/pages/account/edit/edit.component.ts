import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth/_services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public userForm = this.fb.group({
    profile: [''],
    first: [''],
    last: [''],
    age: [],
    bill: [],
  });
  public age: Date;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.userForm.setValue(this.auth.getUserJson());
    this.age = new Date(this.auth.getUserJson().age as Date);
  }

  ngOnInit(): void {}
}
