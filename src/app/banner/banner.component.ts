import { Component, OnInit } from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private readonly translocoService: TranslocoService) { }

  switchLanguage(): void {
    if (this.translocoService.getActiveLang() === 'en') {
      this.translocoService.setActiveLang('fr');
    } else {
      this.translocoService.setActiveLang('en');
    }
  }

  ngOnInit(): void {
  }

}
