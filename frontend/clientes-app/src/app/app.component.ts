import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bienvenido a Angular';
  curso:String = 'Curso spring con angular 7';
  user: String = 'Alexis Mancia';
}
