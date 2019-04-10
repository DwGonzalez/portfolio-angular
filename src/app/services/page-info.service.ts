import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  loaded = false;

  constructor(private http: HttpClient) {

    // console.log('PageInfo Service Started');

    // Read JSON File
    this.http.get('assets/data/pages-data.json')
      .subscribe((resp: PageInfo) => {
        this.loaded = true;
        this.info = resp;

        console.log(resp);
        // console.log(resp['twitter']);
      });
  }
}
