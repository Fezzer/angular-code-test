// TASK: 4 - Service to feed data for the home page.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HomeContent } from '../models/home-content.model';

@Injectable({
  providedIn: 'root'
})
export class HomeContentService {
  private sourceUrl = 'api/home-data.json';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<HomeContent> {
    return this.http.get<HomeContent>(this.sourceUrl).pipe(
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
