import { Component } from '@angular/core';
import countries  from './_files/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-file-read-angular';
  public countryList:{name:string, code:string}[] = countries;
}
