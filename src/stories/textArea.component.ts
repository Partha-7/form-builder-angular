import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'storybook-textArea',
    imports: [CommonModule, MatInputModule],
    standalone: true,
    template: `
<mat-form-field [ngStyle]="{ 'width': width, 'height': height,'backgroundColor':bgColor }">
<mat-label>{{label}}</mat-label>
  <textarea matInput [class]='class' [value]='value' [placeholder]='placeHolder' [disabled]='disabled'></textarea>
</mat-form-field>`,
    exportAs: 'textAreaComponent',
    styleUrls: ['./textArea.css'],
})
export default class textAreaComponent {
    @Input()
    primary = false;
    @Input() width?: string = '100px';
    @Input() height?: string = '75px';
    @Input() bgColor?: string;
    @Input() label: string | undefined = 'text Area';
    @Input() disabled: boolean | undefined = true;
    @Input()
    class?: string;
    @Input() value: any = '';
    @Output()
    @Input() placeHolder?: any = 'text';
    onClick = new EventEmitter<Event>();


}
