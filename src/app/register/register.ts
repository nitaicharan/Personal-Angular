import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Service } from './service';
import { Store } from '@ngrx/store';
import { register } from '../../context/auth';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  protected errorMessages = signal<string[]>([]);
  private readonly service = inject(Service);
  private readonly store = inject(Store);

  protected formGroup = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  onSubmit() {
    const { username, email, password } = this.formGroup.getRawValue();
    this.errorMessages.set([]);

    this.service
      .register(username, email, password)
      .pipe(first())
      .subscribe({
        next: (response) => this.store.dispatch(register(response.user)),
        error: ({ error }) => {
          const errors = error?.errors?.body || ['An error occurred'];
          this.errorMessages.set(Array.isArray(errors) ? errors : [errors]);
        },
      });
  }
}
