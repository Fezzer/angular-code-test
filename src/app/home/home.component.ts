import { Component, OnInit } from '@angular/core';
// TASK: 2 - Added an import for the global constants.
import { GlobalConstants } from '../shared/global-constants'
import { HomeContent } from '../shared/models/home-content.model';
// TASK: 4 - Added an import for the home service.
import { HomeContentService } from '../shared/services/home-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // TASK: 2 - Set the name for the page to control button visibility.
  pageName: string = GlobalConstants.homePageName;
  // TASK: 4 - Add variables to store the page data.
  pageData: HomeContent;
  errorMessage: any;
  pageContent: string;

  constructor(private homeContentService: HomeContentService) { }

  ngOnInit(): void {
    // TASK: 4 - Subscribe to the home service to retrieve the data to display.
    this.homeContentService.getData().subscribe({
      next: data => {
        this.pageData = data;
        this.pageContent = this.pageData.initialText;
      },
      error: err => this.errorMessage = err
    });
  }

  public swapContent(): void {
    // TASK: 4 - Update the content to display when the button is clicked.
    this.pageContent = this.pageData.buttonClickText;
  }
}
