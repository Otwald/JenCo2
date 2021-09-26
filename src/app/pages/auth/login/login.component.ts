import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // set the return Url
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.loginForm.value);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //   this.auth.onLogin(this.user).subscribe(
    //     () => {
    //       //get return url from the route parameters or default to '/'
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     (err) => {
    //       this.error = err.error;
    //     }
    //   );
    //   //Clear form fields
    this.loginForm.reset();
  }
  get email() {
    return this.loginForm.get('email') as AbstractControl;
  }
  get password() {
    return this.loginForm.get('password') as AbstractControl;
  }
}
