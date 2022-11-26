
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private httpClient: HttpClient) {

   }

   getEntityList = () : Observable<any> =>
    this.httpClient.get("https://api.publicapis.org/entries")

  getEntityById = (id: string) : Observable<any> =>
    this.httpClient.get("https://api.publicapis.org/entries" + id)


}
