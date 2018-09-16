import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoging = false;
  isError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  changeInput = () => {
    this.isError = false;
  }

  onSubmitLogin = () => {
    this.isError = false;
    if (this.loginForm.invalid) {
      return ;
    }
    this.isLoging = true;
    this.authService.login(this.loginForm.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['']);
      }
      this.isError = !res;
      this.isLoging = false;
    });
  }

}
