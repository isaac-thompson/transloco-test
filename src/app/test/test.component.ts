import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: ['./test.component.scss']

})
export class TestComponent implements OnInit {
  favoriteColorControl = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

}
