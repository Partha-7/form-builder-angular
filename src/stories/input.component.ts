import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'storybook-input',
  imports: [CommonModule, MatInputModule],
  standalone: true,
  template: `<mat-form-field  [ngStyle]="{ 'width': width, 'height': height,'backgroundColor':bgColor }">
  <mat-label>{{label}}</mat-label>
  <input  matInput [class]='class' [value]='value' [placeholder]='placeHolder' [disabled]='disabled'>
</mat-form-field>`,
  exportAs: 'InputComponent',
  styleUrls: ['./input.css'],
})
export default class InputComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;
  @Input() width?: string = '100px';
  @Input() height?: string = '75px';
  @Input() bgColor?: string;
  @Input() label: string | undefined = 'text';
  @Input() disabled: boolean | undefined = true;
  @Input()
  class?: string;
  @Input() value: any = '';
  @Output()
  @Input() placeHolder?: any = 'text';
  onClick = new EventEmitter<Event>();


}
