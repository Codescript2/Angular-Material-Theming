import { DOCUMENT } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-navbar',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDarkMode = signal(false);

  private _document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      this._document.body.classList.toggle('dark-mode', this.isDarkMode());
    })
  }
}
