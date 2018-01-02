import {Component} from '@angular/core';

@Component({
  selector: 'app-live-page',
  templateUrl: 'live-page.component.html',
  styleUrls: [  './live-page.component.css' , '../../css/fbHeader.css',
    '../../css/bootstrap.css',
    '../../css/fbHeader2.css',
    '../../css/fbSubHeader.css',
    '../../css/flipClock.css',
    '../../css/main.css',
    '../../css/menu-1.css',
    '../../css/menu-2.css',
    '../../css/notes.css',
    '../../css/notification.css',
    '../../css/status.css',
    '../../css/summary.css',
    '../../css/toggles.css',
    '../../css/vMenu.css',
    '../../css/fbLogoClockHeader.css']})
export class LivePageComponent {
  tab = 1;
  updateTab(value: number): void {
    this.tab = value;
  }
}
