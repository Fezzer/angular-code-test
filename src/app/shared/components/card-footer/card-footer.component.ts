import { Component, Input, OnInit } from '@angular/core';
// TASK: 2 - Added a component to provide the card footer.
import { GlobalConstants } from '../../global-constants';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent implements OnInit {
  @Input() pageName: string;
  showHome: boolean;
  showList: boolean;
  showWeather: boolean;
  showTest: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.showHome = this.pageName !== GlobalConstants.homePageName;
    this.showList = this.pageName !== GlobalConstants.listPageName;
    this.showWeather = this.pageName !== GlobalConstants.weatherPageName;
    this.showTest = this.pageName !== GlobalConstants.testPageName;
  }
}