import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteConstants } from '../../core/constants/router.constant';
import { MessageConstant } from 'src/app/core/constants/message.constant';
import { AuthService } from '../auth.service';
import Utils from '../../home/shared-home/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public signupForm!: FormGroup;
  public submitted = false;
  public hide = true;
  public isLoaderActive = false;
  public messageConstantRef = MessageConstant;
  

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }
 
  public registerUser(): void {
    this.startLoading();
    const subscription = this._authService.registerUser(this.signupForm.value);
    subscription.add(() => this.stopLoading());
  }

  public initLoginForm(): void {
    this.signupForm = this._fb.group({
      name: [
        null,
        [Validators.required, Utils.emptySpaceValidator()],
      ],
      email: [
        null,
        [Validators.required, Utils.emptySpaceValidator(), Validators.email],
      ],
      mobile: [
        null,
        [Validators.required, Utils.emptySpaceValidator()],
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
      favoriteplace: [
        null,
        [Validators.required, Utils.emptySpaceValidator()],
      ],
      confirm: [
        null,
        [Validators.required, Utils.emptySpaceValidator()],
      ],
    });
  }

  get registerFormControl(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
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
 
  public redirectToDashboard(): void{
    this._router.navigate(['/dashboard']);
  }
}
