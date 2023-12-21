import { Component, Input } from '@angular/core';
import HeaderComponent from "../../stories/header.component";
import ButtonComponent from '../../stories/button.component';
import { ElementListComponent } from '../element-list/element-list.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [HeaderComponent, ButtonComponent, ElementListComponent, SidebarComponent, CommonModule]
})
export class DashboardComponent {
  @Input() label = 'TEST';
  @Input() isHover = true;
  @Input() isActive = false;
  isPreview: boolean = false;
  nullPreview: boolean = true;
  handlePreview(e: any) {
    this.isPreview = e;
  }
  onClickBack() {
    this.isPreview = false;
  }
}
