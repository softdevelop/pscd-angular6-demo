import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit, OnChanges {
  @Input('num') num;
  @Output() changeValue: EventEmitter<any> = new EventEmitter(null);

  numbers = [];
  constructor() { }

  ngOnInit() {
    this.numbers = Array(this.num).fill(0).map((x,i)=>i+1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.num && !changes.num.firstChange) {
      this.numbers = Array(this.num).fill(0).map((x,i)=>i+1);
    }
  }

  _changeValue(v) {
    this.changeValue.emit(v);
  }

}
