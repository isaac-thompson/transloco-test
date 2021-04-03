import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly translocoService: TranslocoService, private titleService: Title) {
    this.translocoService.selectTranslate('title').subscribe(value => console.log(value));
  }

  setTitle(): void {
    this.translocoService.selectTranslate('title').subscribe(value => this.titleService.setTitle(value));
  }

  ngOnInit(): void {
    this.setTitle();
  }
}
