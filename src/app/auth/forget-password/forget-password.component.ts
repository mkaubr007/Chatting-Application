import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Utils from 'src/app/home/shared-home/utils';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: any;
  isLoaderActive = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
    
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }
 
  public forgotUser(): void {
    this.startLoading();
    const subscription = this._authService.forgotUser(this.forgetForm.value);
    subscription.add(() => this.stopLoading());
  }

  public initLoginForm(): void {
    this.forgetForm = this._fb.group({
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
    return this.forgetForm.controls;
  }

  public startLoading(): void {
    this.isLoaderActive = true;
  }
  public stopLoading(): void {
    this.isLoaderActive = false;
  }

  public redirectedToReset(): void{
    this._router.navigate(['/reset']);
  }

  public redirectedToLogin(): void{
    this._router.navigate(['/login']);
  }

}
