import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Utils from 'src/app/home/shared-home/utils';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  resetForm: any;
  isLoaderActive = false;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }
 
  public resetUser(): void {
    this.startLoading();
    const subscription = this._authService.resetUser(this.resetForm.value);
    subscription.add(() => this.stopLoading());
  }

  public initLoginForm(): void {
    this.resetForm = this._fb.group({
      name: [
        null,
        [Validators.required, Utils.emptySpaceValidator()],
      ],
      email: [
        null,
        [Validators.required, Utils.emptySpaceValidator(), Validators.email],
      ],
      username: [
        null,
        [Validators.required, Utils.emptySpaceValidator()],
      ],
      password: [null, [Validators.required, Utils.emptySpaceValidator()]],
      birthplace: [
        null,
        [Validators.required, Utils.emptySpaceValidator()],
      ],
      favrotiplace: [
        null,
        [Validators.required, Utils.emptySpaceValidator()],
      ],
    });
  }

  get registerFormControl(): { [key: string]: AbstractControl } {
    return this.resetForm.controls;
  }

  public startLoading(): void {
    this.isLoaderActive = true;
  }
  public stopLoading(): void {
    this.isLoaderActive = false;
  }

  public redirectedToLogin(): void{
    this._router.navigate(['/login']);
  }

  public redirectToDashboard(): void {
    this._router.navigate(['/dashboard']);
  }
}
