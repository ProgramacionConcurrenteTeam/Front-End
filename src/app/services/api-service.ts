import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpAPIService {

  constructor(private http: HttpClient) {
  }

  private basePath = 'localhost:9000/predecir';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // tslint:disable-next-line:typedef
  setPath(url: string) {
    this.basePath = url;
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error ocurred: ', error.error.message);
    } else {
      console.log(`Backend returned code: ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request');
  }


  getResult(): Observable<string> {
    return this.http.get<string>(this.basePath).pipe(retry(2), catchError(this.handleError));
  }
}
