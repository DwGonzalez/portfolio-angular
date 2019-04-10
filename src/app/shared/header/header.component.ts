import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/services/page-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _pageInfoService: PageInfoService,
    private router: Router) { }

  ngOnInit() {
  }

  searchProduct(value: string) {

    if (value.length < 1) {
      return;
    }

    this.router.navigate(['/search', value]);
  }

}
