import { Component } from '@angular/core';
import { HeaderComponent } from '../../share/header/header.component';
import { FooterComponent } from '../../share/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [RouterModule,HeaderComponent, FooterComponent],
  templateUrl: './top-navigation.component.html',
})
export class TopNavigationComponent {}
