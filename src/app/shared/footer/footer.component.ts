import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/services/page-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor(public _pageInfoService: PageInfoService) { }

  ngOnInit() {
  }

}
