import { Component, Version, VERSION } from '@angular/core';
import { MatchModel } from './model/MatchModel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;
  matchModel: MatchModel = { title: 'Chennai vs Bangluru' };
}
