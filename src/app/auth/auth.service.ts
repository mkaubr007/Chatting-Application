import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RouteConstants } from '../core/constants/router.constant';
import { HttpService } from '../core/services/http.service';
import { IForgotOrResetPassword, IUserLogin, IUserRegister } from '../shared/models/auth/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isFirstLogin!: boolean;

  constructor(
    private http: HttpService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  
  public registerUser(user: IUserRegister): Subscription {
   return this.Register(user).subscribe({
      next: (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000, verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
        this.router.navigate([RouteConstants.LOGIN]);
      },
      error: (error:any) => {
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000, verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
      }
    })
  }



  public loginUser(user: IUserLogin): Subscription {
    return this.Login(user).subscribe({
      next: (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        localStorage.setItem('token', res.data)
        console.log(res)

      },
      error: (error:any) => {
        console.log(error.message);
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000, verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
      }
    });
  }

  public forgotUser(user: IForgotOrResetPassword): Subscription {
    return this.Forgot(user).subscribe({
      next: (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        localStorage.setItem('token', res.data)
        console.log(res)
        this.router.navigate(['/profile']);
      },
      error: (error:any) => {
        console.log(error.message);
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000, verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
      }
    });
  }

  public resetUser(user: IForgotOrResetPassword): Subscription {
    return this.Reset(user).subscribe({
      next: (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        localStorage.setItem('token', res.data)
        console.log(res)
      },
      error: (error:any) => {
        console.log(error.message);
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000, verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
      }
    });
  }

  Register(reqData: any) {
    return this.http.post(
      `${environment.baseUrl}/api/v1/users/register`,
      reqData,
     
    );
  }

  private Forgot(reqData: any) {
    return this.http.post(
      `${environment.baseUrl}/api/v1/users/login`,
      reqData,

    );
  }

  private Login(reqData: any) {
    return this.http.post(
      `${environment.baseUrl}/api/v1/users/login`,
      reqData,

    );
  }

  private Reset(reqData: any) {
    return this.http.put(
      `${environment.baseUrl}/api/v1/users/login`,
      reqData,

    );
  }

}
