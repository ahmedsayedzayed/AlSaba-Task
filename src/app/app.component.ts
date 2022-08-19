import { Component } from '@angular/core';
import { HttpprogressService } from './services/httpprogress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elsaba-task';
  constructor( public svcProgress: HttpprogressService) { }
}
