import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../auth/user';
import { AuthService } from '../../auth/_services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  private user: User;
  public userForm = this.fb.group({
    profile: [''],
    first: [''],
    last: [''],
    age: [],
    bill: [],
  });
  public age: Date;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.user = this.auth.getUserJson();
    this.age = new Date();
    if (this.user) {
      this.userForm.setValue(this.user);
      this.age = new Date(this.user.age?.toString() as string);
    }
  }

  ngOnInit(): void {}

  onSave(): void {
    this.userForm.value['age'] = new Date(this.userForm.value['age']);
    this.auth.setUserJson(this.userForm.value);
    this.router.navigate(['account']);
  }
}
