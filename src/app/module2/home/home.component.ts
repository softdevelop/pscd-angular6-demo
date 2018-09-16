import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition(':enter', [
        style({opacity: 0}),
        animate(800)
      ]),
      transition('in => out', animate('800ms')),
      transition('out => in', animate('600ms')),
    ])
  ]
})
export class HomeComponent implements OnInit {
  fadeStatus = 'in';
  fadeStatusCss = 'in';
  number = '';
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  changefadeStatus() {
    if (this.fadeStatus == 'in') {
      this.fadeStatus = 'out'
    } else {
      this.fadeStatus = 'in';
    }
  }

  changefadeStatusCss() {
    if (this.fadeStatusCss == 'in') {
      this.fadeStatusCss = 'out'
    } else {
      this.fadeStatusCss = 'in';
    }
  }

  onKeydown(e) {
    if (!(e.key >= 0 && e.key <= 9) && e.keyCode != 8 && e.keyCode != 46)
      e.preventDefault();
  }

  inputChange(e) {
    let res = '';
    let nums = parseInt(e.target.value.replace(/[^0-9]/g, '')).toString().split("").reverse().join("").match(/.{1,3}/g);
    if (nums.length > 0) {
      if (nums.length == 1) {
        res = nums[0].split("").reverse().join("");
      } else {
        res = nums[nums.length - 1].split("").reverse().join("");
        for (let i = nums.length - 2; i > -1; i--) {
          res += ',' + nums[i].split("").reverse().join("");
        }
      }
    }
    this.number = res;
    this.ref.detectChanges();
  }

}
