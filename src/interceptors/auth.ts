import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { isLoggedInSelector, tokenSelector } from '../context/auth';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const store = inject(Store);

  const isLoginRequest = req.url.includes('/users/login');
  const isUserCreateRequest =
    req.method === 'POST' && (req.url.endsWith('/users') || req.url.endsWith('/users/'));

  if (isLoginRequest || isUserCreateRequest) {
    return next(req);
  }

  const isLoggedInSignal = store.selectSignal(isLoggedInSelector);
  const tokenSignal = store.selectSignal(tokenSelector);

  const isLoggedIn = isLoggedInSignal();
  if (!isLoggedIn) {
    return next(req);
  }

  const token = tokenSignal();
  if (!token) {
    return next(req);
  }

  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(authReq);
}
