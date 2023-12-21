import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector: 'storybook-radio',
    imports: [CommonModule, MatRadioModule],
    standalone: true,
    template: ` <mat-radio-button [value]='value'  [disabled]="disabled">{{label}}</mat-radio-button>`,
    exportAs: 'RadioComponent',
    styleUrls: ['./radio.css'],
})
export default class RadioComponent {
    @Input()
    class?: string;
    @Input() disabled:boolean=false;
    @Input() name = '';
    @Input() id = '';
    @Input() value: any = '';
    @Input() label: string = 'radio';
}
