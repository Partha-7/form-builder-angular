import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from './User';
import ButtonComponent from './button.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'storybook-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ButtonModule, MatIconModule],
  template: `<header>
    <div class="storybook-header">
      <div>
        <h1 class="py-px">Form-Builder</h1>
      </div>
      <div class="card flex justify-content-center">
    <p-button *ngIf="preview===false" class="bg-cyan-600 text-white h-8 text-md rounded-md w-32 pl-5 pb-3 hover:bg-cyan-400" label="Preview" (onClick)="showPreview()"><mat-icon class="pt-1">play_arrow</mat-icon></p-button>
</div>
    </div>
  </header>`,
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;
  @Input() preview: any;
  @Output() onChangePreview = new EventEmitter<boolean>();
  @Output()
  onLogin = new EventEmitter<Event>();
  @Output()
  onLogout = new EventEmitter<Event>();
  @Output()
  onCreateAccount = new EventEmitter<Event>();
  showPreview() {
    this.preview = true;
    this.onChangePreview.emit(true);
  }
}
