import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormGroup,

  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageConstant } from '../../core/constants/message.constant';
import Utils from '../../home/shared-home/utils';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLoaderActive = false;
  public hide = true;
  public messageConstantRef = MessageConstant;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _fb: FormBuilder,
   
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  public loginUser(): void {
    this.startLoading();
    const subscription = this._authService.loginUser(this.loginForm.value);
    subscription.add(() => this.stopLoading());
  }

  public initLoginForm(): void {
    this.loginForm = this._fb.group({
      email: [
        null,
        [Validators.required, Utils.emptySpaceValidator(), Validators.email],
      ],
      password: [null, [Validators.required, Utils.emptySpaceValidator()]],
    });
  }

  get loginFormControl(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  public startLoading(): void {
    this.isLoaderActive = true;
  }
  public stopLoading(): void {
    this.isLoaderActive = false;
  }

  public redirectToForgot(): void {
    this._router.navigate(['/forgot']);
  }

  public redirectToDashboard(): void {
    this._router.navigate(['/dashboard']);
  }
  
  public createAccount(): void {
    this._router.navigate(['/register']);
  }
}
