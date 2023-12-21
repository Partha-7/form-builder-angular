import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'storybook-button',
  imports: [CommonModule,MatButtonModule],
  standalone: true,
  template: ` 
  <button
   mat-raised-button
   (click)="onClick.emit($event)"
    [ngClass]="class"
    [ngStyle]="{ 'background-color': backgroundColor }"
    [disabled]="disabled"
   > {{ label }}</button>`,
  exportAs: 'ButtonComponent',
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;
  @Input() class:any;
  @Input() disabled:boolean=false;
  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label:any = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

}
