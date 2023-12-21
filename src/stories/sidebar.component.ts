import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import ButtonComponent from './button.component';

@Component({
  selector: 'storybook-sidebar',
  imports: [CommonModule,ButtonComponent],
  standalone:true,
  template: ` <div class="sidebar-container">
   <span class="list-items" *ngFor="let item of list">{{item}}</span>
  </div>`,
  exportAs:'SidebarComponent',
  styleUrls: ['./sidebar.css'],
})
export default class SidebarComponent {
  @Input()
  label = 'Sidebar';

  @Input()
  list=['Create form']

}
