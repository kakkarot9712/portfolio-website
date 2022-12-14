import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { sideMenuDirective } from '../shared/side-menu.directive';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, sideMenuDirective, AppComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @ViewChild('backdrop')backdropElement: ElementRef;
  @ViewChild('mobileNav')mobileNavElement: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  openSideMenu(){
    this.renderer.setStyle(this.backdropElement.nativeElement, 'display', 'block')
    setTimeout(()=>{
      this.renderer.setStyle(this.backdropElement.nativeElement, 'opacity', '1')
      this.renderer.setStyle(this.mobileNavElement.nativeElement, 'transform', 'translateX(0)')
    }, 5)
  }
}
