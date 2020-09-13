// TASK: 5 - Add a test component.
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  pageName: string = GlobalConstants.testPageName;

  constructor() { }

  ngOnInit(): void {
  }

}
