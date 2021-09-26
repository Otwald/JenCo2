import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../../auth/user';
import { AuthService } from '../../auth/_services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public userForm = this.fb.group({
    profile: [''],
    first: [''],
    last: [''],
    age: [],
  });
  user: User;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.user = this.auth.getUserJson();
  }

  ngOnInit(): void {}
}
