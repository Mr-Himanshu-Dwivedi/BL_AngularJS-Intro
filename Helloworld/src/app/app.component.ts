import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/BL_logo_square_jpg.jpg"

  ngOnInit(): void{
    this.title = "Hello from bridgeLabz.";
  }
}