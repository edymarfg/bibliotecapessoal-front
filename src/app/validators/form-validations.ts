import { FormControl } from '@angular/forms';

export class FormValidations {
  static numberValidator(control: FormControl) {
    const number = control.value;
    if (number && number !== '') {
      const validaNum = /[^0-9]/g;
      return !validaNum.test(number) ? null : { numInvalido: true };
    }
    return null;
  }

  static noLetterValidator(control: FormControl) {
    const number = control.value;
    if (number && number !== '') {
      const validaNum = /[A-z]/g;
      return !validaNum.test(number) ? null : { numInvalido: true };
    }
    return null;
  }

  static noPagLidasMaiorQuePaginas(paginas: Number, control: FormControl) {
    const number = control.value;
    if (number && number !== '') {
      return number > paginas ? null : { numInvalido: true };
    }
    return null;
  }
}
