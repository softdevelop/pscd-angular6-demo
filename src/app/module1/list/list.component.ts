import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  num = 1;
  constructor() { }

  ngOnInit() {
  }

  inputChange(e) {
    this.num = parseInt(e.target.value);
  }

  changeValue(v) {
    if (v == 'i') {
      this.num++;
    }
    if (v == 'd') {
      this.num--;
    }
    if (this.num < 0) {
      this.num = 0;
    }
  }

}
