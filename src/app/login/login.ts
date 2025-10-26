import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Store } from '@ngrx/store';
import { Service } from './service';
import { login } from '../../context/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  protected errorMessages = signal<string[]>([]);
  private service = inject(Service);
  private store = inject(Store);

  protected formGroup = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  onSubmit() {
    const { email, password } = this.formGroup.getRawValue();
    this.errorMessages.set([]);

    this.service
      .login(email, password)
      .pipe(first())
      .subscribe({
        next: (response) => this.store.dispatch(login(response.user)),
        error: ({ error }) => {
          const errors = error?.errors?.body || ['An error occurred'];
          this.errorMessages.set(Array.isArray(errors) ? errors : [errors]);
        },
      });
  }
}
