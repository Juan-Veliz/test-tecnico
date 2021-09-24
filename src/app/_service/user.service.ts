import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  host = `${environment.endpoint}/users`;
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): any{
    return this.http.get<any>(this.host, { observe: 'response'});
  }

}
