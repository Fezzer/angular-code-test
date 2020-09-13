// TASK: 3 - Service to feed data for the list page.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {
  private sourceUrl = 'api/list-data.json';

  constructor(private http: HttpClient) {
  }

  getListItems(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(this.sourceUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
