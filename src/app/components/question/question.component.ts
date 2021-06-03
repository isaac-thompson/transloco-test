import { Component, OnInit } from '@angular/core';
import {TRANSLOCO_SCOPE, TranslocoService} from '@ngneat/transloco';
import englishQuestions from '../../../assets/i18n/questions/en.json';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'questions'
    }
  ]

})
export class QuestionComponent implements OnInit {


  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.translocoService.selectTranslation('questions')
      .subscribe(console.log);
  console.log(englishQuestions);
  }

}
