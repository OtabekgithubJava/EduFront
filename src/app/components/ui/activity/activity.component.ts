import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  user: any;

  constructor() {
    console.log('Activity component created');
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  status: string = 'activity rating';
  mon: string = 'activity__item';
  tue: string = 'activity__item';
  wed: string = 'activity__item';
  thu: string = 'activity__item';
  fri: string = 'activity__item select-item';
  sat: string = 'activity__item';
  sun: string = 'activity__item';

  changeActivityMon() {
    this.mon += ' select-item';
    this.tue = 'activity__item';
    this.wed = 'activity__item';
    this.thu = 'activity__item';
    this.fri = 'activity__item';
    this.sat = 'activity__item';
    this.sun = 'activity__item';
  }

  changeActivityTue() {
    this.tue += ' select-item';
    this.mon = 'activity__item';
    this.wed = 'activity__item';
    this.thu = 'activity__item';
    this.fri = 'activity__item';
    this.sat = 'activity__item';
    this.sun = 'activity__item';
  }

  changeActivityWed() {
    this.wed += ' select-item';
    this.mon = 'activity__item';
    this.tue = 'activity__item';
    this.thu = 'activity__item';
    this.fri = 'activity__item';
    this.sat = 'activity__item';
    this.sun = 'activity__item';
  }

  changeActivityThu() {
    this.thu += ' select-item';
    this.mon = 'activity__item';
    this.tue = 'activity__item';
    this.wed = 'activity__item';
    this.fri = 'activity__item';
    this.sat = 'activity__item';
    this.sun = 'activity__item';
  }

  changeActivityFri() {
    this.fri += ' select-item';
    this.mon = 'activity__item';
    this.tue = 'activity__item';
    this.wed = 'activity__item';
    this.thu = 'activity__item';
    this.sat = 'activity__item';
    this.sun = 'activity__item';
  }

  changeActivitySat() {
    this.sat += ' select-item';
    this.mon = 'activity__item';
    this.tue = 'activity__item';
    this.wed = 'activity__item';
    this.thu = 'activity__item';
    this.fri = 'activity__item';
    this.sun = 'activity__item';
  }

  changeActivitySun() {
    this.sun += ' select-item';
    this.mon = 'activity__item';
    this.tue = 'activity__item';
    this.wed = 'activity__item';
    this.thu = 'activity__item';
    this.fri = 'activity__item';
    this.sat = 'activity__item';
  }

  changeStatus() {
    this.status = 'activity rating';
  }
}
