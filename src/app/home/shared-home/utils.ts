import { ValidatorFn, AbstractControl } from '@angular/forms';
import {IName} from "../../shared/models/auth/auth";
export default class Utils {
  static emptySpaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      /*number | string --> any*/
      const errors: any = {};
      if (control.value && !control.value.trim()) {
        errors.numbers = true;
        return errors;
      }
      return null;
    };
  }

}
