import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  loaded = false;

  team: any[] = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  loadInfo() {
    this.http.get('assets/data/pages-data.json')
      .subscribe((resp: PageInfo) => {
        this.loaded = true;
        this.info = resp;
      });
  }

  loadTeam() {
    // Read JSON File
    this.http.get('https://urku-app.firebaseio.com/team.json')
      .subscribe((resp: any[]) => {
        this.team = resp;
        console.log(resp);
      });
  }

}
