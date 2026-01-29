import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  imports: [],
  templateUrl: './row-item.html'
})
export class RowItem {
  @Input() item!: Item;
  @Output() removeEventEmitter = new EventEmitter<number>();

  onRemove(id: number){
    this.removeEventEmitter.emit(id);
  }
}
