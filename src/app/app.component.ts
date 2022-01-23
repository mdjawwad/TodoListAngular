import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos-list';

  isDarkThem=false;

  toggleThem(){
    this.isDarkThem = !this.isDarkThem
  }
}
