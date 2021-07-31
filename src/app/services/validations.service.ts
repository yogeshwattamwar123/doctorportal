import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor(
    private toastr: ToastrService
  ) { }

  public message(type: boolean, message: string) {

    if (type)
      this.toastr.error(message, 'Error!');
    else
      this.toastr.success(message, 'Success!');

  }
}
