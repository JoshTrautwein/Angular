import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayOn = true;
  count = 0;
  countList = [];

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.count += 1;
    this.countList.push(this.count);
    this.displayOn = !this.displayOn;
  }
}
