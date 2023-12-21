import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'storybook-checkbox',
  imports: [CommonModule,MatCheckboxModule],
  standalone:true,
  template:` <mat-checkbox [class]='class' [checked]="checked" [disabled]="disabled">{{label}}</mat-checkbox>`,
  exportAs:'CheckboxComponent',
  styleUrls: ['./checkbox.css'],
})
export default class CheckboxComponent {

@Input() label:string='checkbox';
@Input() class:any;
@Input() checked:boolean=false;
@Input() disabled:boolean=true;
  @Output()
  onClick = new EventEmitter<Event>();

 
}
