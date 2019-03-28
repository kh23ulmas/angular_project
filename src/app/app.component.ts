import { Component } from '@angular/core';
import { Teacher } from './teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  teacher : Teacher = {
    id: 112,
    name: 'Ulmas'
  };
}
