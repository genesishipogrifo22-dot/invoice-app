import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  imports: [],
  templateUrl: './invoice-view.html',
})
export class InvoiceView {

  @Input() name!: string;
  @Input() id!: number;
}
