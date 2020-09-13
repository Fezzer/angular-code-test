import { Component, OnInit } from '@angular/core';
// TASK: 2 - Added an import for the global constants.
import { GlobalConstants } from '../shared/global-constants'
import { ListItem } from '../shared/models/list-item.model';
import { ListItemService } from '../shared/services/list-item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // TASK: 2 - Set the name for the page to control button visibility.
  pageName: string = GlobalConstants.listPageName;
  // TASK: 3 - Add variables required to dymamically load the list items.
  items: ListItem[];
  errorMessage: string;

  // TASK: 3 - Get the list item service injected into the component.
  constructor(private listItemService: ListItemService) { }

  ngOnInit(): void {
    // TASK: 3 - Subscribe to the list item service to retrieve the list items to display.
    this.listItemService.getListItems().subscribe({
      next: items => {
        this.items = items;
      },
      error: err => this.errorMessage = err
    });
  }
}