import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'capctha-page',
  templateUrl: './capctha-page.component.html',
  styleUrls: ['./capctha-page.component.scss']
})
export class CapcthaPageComponent {
  
  token: string|undefined;

  constructor(private router: Router ) {this.token = undefined;}
  
  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    this.router.navigate(['/SucessPage']);
  }

}
