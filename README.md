# Read Local Json File in Angular Application
In this article, We will see how to use local JSON file in Angular application. There area various way we can use local JSON file in our Angular application.

## Create an Angular application with Angular CLI
```
ng new read-local-json-angular
```

## Create JSON file with dummy data
Create any JSON file with any name, I have created a file countries.json

```
[
{"name" : "Afghanistan", "code" : "AF"},
{"name" : "Åland Islands", "code" : "AX"},
{"name" : "Albania", "code" : "AL"},
{"name" : "Algeria", "code" : "DZ"},
{"name" : "American Samoa", "code" : "AS"},
{"name" : "AndorrA", "code" : "AD"},
{"name" : "Angola", "code" : "AO"},
{"name" : "Anguilla", "code" : "AI"},
{"name" : "Antarctica", "code" : "AQ"},
{"name" : "Antigua and Barbuda", "code" : "AG"},
{"name" : "Argentina", "code" : "AR"},
{"name" : "Armenia", "code" : "AM"},
{"name" : "Aruba", "code" : "AW"},
{"name" : "Australia", "code" : "AU"},
{"name" : "Austria", "code" : "AT"},
{"name" : "Azerbaijan", "code" : "AZ"},
{"name" : "Bahamas", "code" : "BS"},
{"name" : "Bahrain", "code" : "BH"}
]
```

In the above file there is static list of countries with its name and code. Now in this app, I will show the data in app component.

## Import JSON file in the component

Update app.component.ts file, Have a look on the update app.component.ts file

```
import { Component } from '@angular/core';
import countries from './_files/countries.json';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-file-read-angular';
  public countryList:{name:string, code:string}[] = countries;
}
```

By default, Angular doesn't read the JSON file in the application. So we need to do some extra stuff for that. So we will create a file named 'json-typings.d.ts' inside the app folder of the project. Add below code in it.

```
declare module "*.json" {
const value: any;
export default value;
} 
```

## Update Component Template file

```
<div style="text-align:center">
    <h2>
        Country list from local json file...
    </h2>
    <ul *ngFor="let item of countryList">
       <li>
          <h3>Country Name :{{item.name}}, Code: {{item.code}}</h3>
       </li>
    </ul>
</div>
```


## Run the application
Run the app with npm start over terminal. App will look like below over browser.
![alt text](https://jsonworld.com/images/read-local-json-file-angular-country-list.png)

Article was originally posted at [jsonworld.com](https://jsonworld.com/demo/how-to-read-local-json-file-in-angular)

"# how-to-read-local-json-file-in-angular-application" 
