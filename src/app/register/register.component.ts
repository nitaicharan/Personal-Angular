import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { take, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [ReactiveFormsModule, CommonModule],
  providers: [AuthService],
})
export class RegisterComponent {
  group: FormGroup;

  constructor(
    private readonly service: AuthService,
    private readonly formBuilder: FormBuilder,
  ) {
    this.group = this.formBuilder.group({
      username: ['', [Validators.min(1), Validators.max(36)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.min(6), Validators.max(50)]],
    });
  }

  submit() {
    this.service
      .signUp(this.group.value)
      .pipe(take(1), tap(console.log))
      .subscribe();
  }
}
