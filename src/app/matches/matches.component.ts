import { Component, Input, OnInit } from '@angular/core';
import { MatchModel } from '../model/MatchModel';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
 @Input() matchModel : MatchModel
  constructor() { }

  ngOnInit() {
  }

}