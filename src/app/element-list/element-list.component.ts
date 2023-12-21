import { Component, EventEmitter, Input, Output } from '@angular/core';
import ButtonComponent from '../../stories/button.component';
import { CommonModule } from '@angular/common';
import CheckboxComponent from '../../stories/checkbox.component';
import InputComponent from '../../stories/input.component';
import { CdkDragDrop, CdkDrag, CdkDropList, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import DropdownComponent from '../../stories/dropdown.component';
import RadioComponent from '../../stories/radio.component';
import { MatIconModule } from '@angular/material/icon';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChipsModule } from 'primeng/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import textAreaComponent from '../../stories/textArea.component';

@Component({
  selector: 'app-element-list',
  standalone: true,
  imports: [ButtonComponent,
    CheckboxComponent,
    InputComponent,
    CommonModule,
    CdkDrag,
    CdkDropList,
    MatIconModule,
    TooltipModule,
    DialogModule,
    MatButtonToggleModule,
    ChipsModule,
    RadioComponent,
    DropdownComponent,
    MatSlideToggleModule,
    textAreaComponent],
  templateUrl: './element-list.component.html',
  styleUrl: './element-list.component.css'
})
export class ElementListComponent {
  @Input() inputLabel: any = 'Text';
  @Input() buttonLabel: any = 'Button';
  @Input() checkboxLabel: any = 'checkbox';
  @Input() radioLabel: any = 'radio';
  @Input() props: any;
  @Input() preview:any;
  @Input() itemWidth: string = '300px';
  @Input()
  optionsList: string[] = [];
  isDisabled = false;
  isChecked = true;
  targetItem: string = '';
  @Output() onClosePreview = new EventEmitter<boolean>();

  onSlideToggleChange(event: boolean): void {
    this.isDisabled = event;
  }
  onSlideCheckedChange(event: boolean): void {
    this.isChecked = event;
  }
  elements = [
    { name: 'Button', type: 'button', inputType: 'button', component: ButtonComponent },
    { name: 'text', type: 'input-text', inputType: 'text', component: InputComponent },
    { name: 'checkbox', type: 'input-check', inputType: 'checkbox', displayText: 'Check box', component: CheckboxComponent },
    { name: 'dropdown', type: 'dropdown', inputType: 'select', component: DropdownComponent },
    { name: 'radio', type: 'radio', inputType: 'radioButton', component: RadioComponent },
    { name: 'textArea', type: 'text', inputType: 'textArea', component: textAreaComponent }
  ];
  contentBlock: any = [];
  visible: boolean = false;
  value: string | undefined;
  values: string[] | undefined;

  showDialog(e: any) {
    if(this.preview===false){
    this.targetItem = e.target.textContent;
    this.visible = true;
    }
  }
  
  drop(event: CdkDragDrop<string[]> | any) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  predicate(item: CdkDrag<string[]> | any) {
    return item.data;
  }
  noReturnPredicate() {
    return false;
  }
  removeItem() {
    this.contentBlock.pop();
    return this.contentBlock;
  }
  onClear() {
    this.contentBlock.length = 0;
    return this.contentBlock;
  }
  saveLabel(newValue: any) {
    console.log(this.targetItem);
    if(this.targetItem === "Button"){
      this.buttonLabel = newValue.target.value;
    }
    this.inputLabel = newValue.target.value;
    this.checkboxLabel = newValue.target.value;
    this.radioLabel = newValue.target.value;
  }
  changeWidth(ev: any) {
    this.itemWidth = ev.target.value + "px";
  }

  onAddOptions(ev: any) {
    this.optionsList.push(ev.value);
    return this.optionsList;
  }
  onChangeDisable(e: any) {
    console.log(e);
  }
  closePreview(){
    this.preview=false;
    this.onClosePreview.emit(true);
  }
}
