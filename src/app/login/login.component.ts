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
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService],
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  group: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: AuthService,
  ) {
    this.group = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.min(6), Validators.max(50)]],
    });
  }

  submit() {
    this.service
      .signIn(this.group.value)
      .pipe(take(1), tap(console.log))
      .subscribe();
  }
}
