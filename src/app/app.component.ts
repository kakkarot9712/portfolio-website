import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { sideMenuDirective } from './shared/side-menu.directive';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, sideMenuDirective, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  
  constructor(){}
}
