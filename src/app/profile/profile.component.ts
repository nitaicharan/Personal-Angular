import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { User } from '../articles/types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers: [UserService],
})
export class ProfileComponent implements OnInit {
  profile$: Observable<User> = of();
  constructor(
    private readonly service: UserService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const { username }: Record<string, string> = this.route.snapshot.params;
    this.profile$ = this.service.get(username).pipe(map((i) => i.profile));
  }
}
