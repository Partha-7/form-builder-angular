import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'storybook-dropdown',
  imports: [CommonModule, MatSelectModule],
  standalone: true,
  template: `<mat-form-field [ngStyle]="{ 'width': width, 'height': height,'backgroundColor':bgColor }">
  <mat-label>{{label}}</mat-label>
  <mat-select [class]='class' [disabled]='disabled' [value]="value">
    @for (element of data; track element) {
      <mat-option>{{element}}</mat-option>
    }
  </mat-select>
</mat-form-field>`,
  exportAs: 'DropdownComponent',
  styleUrls: ['./dropdown.css'],
})
export default class DropdownComponent {
  @Input()
  primary = false;
  @Input() class?: string;
  @Input() width?: string = '100px';
  @Input() height?: string = '75px';
  @Input() bgColor?: string;
  @Input() disabled?: boolean | undefined = true;
  @Input() label: string = 'Select';
  @Input() value: any;
  @Input() name = '';
  @Input() id = '';
  @Input() data = ['test1', 'test2', 'test3', 'test4'];
}
